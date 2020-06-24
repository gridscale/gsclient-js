import { assignIn, isArray, isFunction, isObject, isUndefined, uniqueId, assign, forEach, isPlainObject } from 'lodash';

require('es6-promise').polyfill();
require('isomorphic-fetch');


export interface Links {
  self?(): Promise<ApiResult<GenericApiResult>>;
  first?(): Promise<ApiResult<GenericApiResult>>;
  next?(): Promise<ApiResult<GenericApiResult>>;
  last?(): Promise<ApiResult<GenericApiResult>>;
}

export interface Meta {
  count: number;
  total: number;
  limit: number;
  offset: number;
  page: number;
}

// tslint:disable-next-line: no-any
export type GenericApiResult = any;
export type VoidApiResult = void;

export interface ApiResult<T> {
  success: boolean;
  result: T;
  response?: Response;
  requestInit?: RequestInit;
  links?: Links;
  meta?: Meta;
  watch?: Function | null;
  id?: string | null;
  failureType?: string | null;
}


export interface ApiSettings {
  endpoint?: string;
  endpointOverrides?: { [key: string]: string; }; // override endpoint for specific paths, format "path:endpoint", path can be regex (string start and end with '/')
  token?: string;
  userId?: string;
  limit?: number;
  watchdelay?: number;
  apiClient?: string;
}

export interface RequestOptions {
  page?: number;
  limit?: number;
  fields?: string[];
  filter?: string[];
  sort?: string | string[];
}

export interface RequestPollResult {
  message: string;
  status: string;
  create_time: string;
}

export interface CreateResult {
  requestUuid?: string;
  objectUuid?: string;
}

export class GSError extends Error {
  result: GenericApiResult;
  success = false;
  response: Response;

  constructor(message, result) {
    super();
    this.name = 'GridscaleError';

    // try to assemble message with more details from result
    if ( result.response
        && result.response.request
        && result.response.request.method
        && typeof (result.response.status) !== 'undefined' && result.response.request.url) {
      this.message = 'Error : ' + result.response.request.method
                    + ' | ' + result.response.status
                    + ' | ' + result.response.request.url.split('?')[0];

    } else {
      this.message = message || 'Default Message';
    }

    this.result = result;
    this.response = result.response || undefined;
  }
}



export class APIClass {
    // Local Settings
    private settings: ApiSettings = {
      endpoint: 'https://api.gridscale.io',
      endpointOverrides: {}, // override endpoint for specific paths, format "path:endpoint", path can be regex (string start and end with '/')
      token: '',
      userId: '',
      limit: 25,
      watchdelay: 51,
      apiClient: 'gs_api_node'
    };

    /**
     * Store api client in current session
     * @param _client  String
     */
    public storeClient(_client: string) {
      this.settings.apiClient = _client;
    }

    /**
     * Store Token for Current Session
     * @param _token Secret Token
     */
    public storeToken(_token: string, _userId: string) {
      // Store Token
      this.settings.token = _token;
      this.settings.userId = _userId;
    }

    /**
     * Update local Request Options
     *
     * @param _option
     */
    public setOptions = (_option: ApiSettings) => {
      // Assign new Values
      assignIn(this.settings, _option);
    }


    public request(_path: string = '', _options: RequestInit, _callback: Function = () => { }): Promise<ApiResult<GenericApiResult>> {
      return this.makeRequest(_path, _options, _callback);
    }

    /**
     * Start the API Request
     *
     *
     * @param _path
     * @param _options
     * @param _callback
     * @returns {Promise}
     */
    private makeRequest( _path: string = '', _options: RequestInit , _callback: Function= () => {} ): Promise<ApiResult<GenericApiResult>> {
      /**
       * Build Request Object
       * @type {{url: string; headers: {X-Auth-UserId: string; X-Auth-Token: string}}}
       */
      const options: RequestInit = !isObject(_options) ? {} : assignIn( {}, _options );

      // check if we should use another endpoint for this path (mocking)
      var endpoint = this.settings.endpoint;
      if (this.settings.endpointOverrides && typeof(this.settings.endpointOverrides) === 'object') {
        forEach(this.settings.endpointOverrides, (_overrideEndpoint, _overridePath) => {
          if (_overridePath.match(/^\/(.*)\/$/) && _path.split('?')[0].match(new RegExp(RegExp.$1))) {
            endpoint = _overrideEndpoint;

          } else if (_path.split('?')[0] === _overridePath) {
            endpoint = _overrideEndpoint;

          } else {
            return true;
          }

          return false;
        });
      }



      // Build Options
      const url: string = _path.search('https://') === 0 ? _path :  endpoint + _path; // on Links there is already
      options.headers = options.headers ? options.headers : {};
      options.headers['X-Auth-UserId'] = this.settings.userId;
      options.headers['X-Auth-Token'] = this.settings.token;
      options.headers['X-Api-Client'] = this.settings.apiClient;

      // return results as object or text
      const getResult = (_response: Response, _rejectOnJsonFailure = true): Promise<GenericApiResult> => {
        return new Promise((_resolve, _reject) => {
          if (_response.status !== 204 && _response.headers.has('Content-Type') && _response.headers.get('Content-Type').indexOf('application/json') === 0) {
            _response.json()
              .then(json => {
                _resolve(this.camelify(json));
              })
              .catch(() => {
                if (_rejectOnJsonFailure) {
                  _reject();

                } else {
                  // try text
                  _response.text().then(text => _resolve(text))
                                  .catch(e => _resolve(null));
                }
              }
            );
          } else {
            _response.text().then(text => _resolve(text))
                            .catch(e => _resolve(null));
          }
        });
      };

      // Setup DEF
      const def: Promise<ApiResult<GenericApiResult>> = new Promise( ( _resolve, _reject ) => {
        // Fire Request
        const onSuccess = (_response: Response, _request: Request, _requestInit: RequestInit) => {
          getResult(_response.clone()).then((_result) => {
            const result: ApiResult<GenericApiResult> = {
              success: true,
              result: _result,
              response: _response.clone(),
              id: null,
              requestInit: _requestInit
            };

            // Check for Links and generate them as Functions
            if (_result && _result._links) {
              const links = {};
              forEach(_result._links, (link, linkname) => {
                links[linkname] = this.link(_result._links[linkname]);
              });
              result.links = links;
            }

            if (_result && _result._meta) {
              result.meta = _result._meta;
            }

            /**
             * On POST, PATCH and DELETE Request we will inject a watch Function into the Response so you can easiely start watching the current Job
             */
            if (options['method'] === 'POST' || options['method'] === 'PATCH' || options['method'] === 'DELETE') {
              if (result.response.headers.has('x-request-id')) {
                result.watch = () => this.watchRequest(result.response.headers.get('x-request-id'));
              }
            }

            _resolve(result);
            setTimeout(() => _callback(_response.clone(), result));
          })
          .catch(() => {
            // tslint:disable-next-line: no-use-before-declare
            onFail(_response, _request, _requestInit, 'json');
          });
        };
        const onFail = (_response: Response, _request: Request, _requestInit: RequestInit, _failType = 'request') => {
          getResult(_response.clone(), false).then((_result) => {
            const result: ApiResult<GenericApiResult> = {
              success: false,
              result: _result,
              response: assign(_response.clone(), { request: _request }),
              links: {},
              watch: null,
              id: uniqueId('apierror_' + (new Date()).getTime() + '_'),
              requestInit: _requestInit,
              failureType: _failType
            };

            this.log({
              result: result,
              response: _response.clone(),
              id: result.id,
              requestInit: result.requestInit
            });

            _reject( new GSError('Request Error', result) );
            setTimeout(() => _callback(_response.clone(), result));
          });
        };


        const request = new Request(url, options);
        const promise = fetch(request);
        promise
          .then((_response) => {
            if (_response.ok) {
              // The promise does not reject on HTTP errors
              onSuccess(_response, request, options);

            } else {
              onFail(_response, request, options);
            }
          })
          .catch((_response) => {
            _reject(new GSError('Network failure', _response));
          });

        // Return promise
        return promise;
      } );


      // Catch all Errors and


      // Return DEF
      return def;
    }




    /**
     * Build Option URL to expand URL
     * @param _options
     * @returns {string}
     */
    private buildRequestURL(_options) {
      // Push Valued
      const url = [];

      // Add Options to URL
      forEach(_options, (val, key) => {
          if ( isArray(_options[key]) ) {
              url.push(key + '=' + _options[key].join(',') );
          } else {
              url.push(key + '=' + _options[key] );
          }
      });

      return url.length > 0 ? ('?' + url.join('&')) : '';
    }


    /**
     * Start Get Call
     * @param _path
     * @param _callback
     */
    public get(_path: string, _options?: RequestOptions | Function, _callback?: Function): Promise<ApiResult<GenericApiResult>> {
      if ( isObject( _options ) ) {
          _path += this.buildRequestURL( _options );
      }

      // If No Options but Callback is given
      if ( isUndefined( _callback ) && isFunction( _options ) ) {
          _callback = _options;
      }

      return this.makeRequest(_path, {method: 'GET'}, _callback );
    }

    /**
     * Start Delete Call
     * @param _path
     * @param _callback
     */
    public remove(_path: string, _callback?: Function): Promise<ApiResult<GenericApiResult>> {
      return this.makeRequest(_path, {method: 'DELETE'}, _callback );
    }


    /**
     * Send Post Request
     *
     * @param _path Endpoint
     * @param _attributes  Attributes for Post Body
     * @param _callback Optional Callback
     * @returns {Promise}
     */
    public post(_path: string, _attributes: Object, _callback?: Function): Promise<ApiResult<GenericApiResult>> {
      return this.makeRequest(_path, { method : 'POST', body  : JSON.stringify(this.lodashify(_attributes)), headers: {'Content-Type': 'application/json' } }, _callback );
    }

    /**
     * Send PAtCH Request
     *
     * @param _path Endpoint
     * @param _attributes  Attributes for Post Body
     * @param _callback Optional Callback
     * @returns {Promise}
     */
    public patch(_path: string, _attributes: Object, _callback?: Function): Promise<ApiResult<GenericApiResult>> {
      return this.makeRequest(_path, { method : 'PATCH', body  : JSON.stringify(this.lodashify(_attributes)), headers: {'Content-Type': 'application/json' } }, _callback );
    }


    /**
     * Generate URL for Linked Request. No Options are required because its in the URL already
     *
     * @param _link
     * @param _callback
     * @returns {Function}
     */
    private link( _link ): Function {
      /**
       * generate Function that has an Optional Callback
       */
      return (_callback?): Promise<ApiResult<GenericApiResult>> => {
        return this.makeRequest(_link.href, {method: 'GET'}, _callback );
      };
    }


    /**
     * Start Pooling on Request Endpoint
     *
     *
     * @param _requestid
     * @param _callback
     * @returns {Promise}
     */
    public requestpooling(_requestid: string, _callback?: Function): Promise<ApiResult<{ [uuid: string]: RequestPollResult }>> {
      return this.makeRequest('/requests/' + _requestid, {method: 'GET'}, _callback );
    }


    /**
     * Recursive creating of Request Proises
     *
     *
     * @param _requestid
     * @param _resolve
     * @param _reject
     */
    public buildAndStartRequestCallback( _requestid: string , _resolve: Function, _reject: Function): void {
      /**
       * Start new Request
       */
      this.requestpooling(_requestid).then((_result) => {
        // Check Request Status to Decide if we start again


        if (_result.result[ _requestid ].status === 'pending') {

          setTimeout(() => {
              this.buildAndStartRequestCallback(_requestid , _resolve, _reject);
          }, this.settings.watchdelay );

        } else if ( _result.response.status === 200 ) {

          // Job done
          _resolve(_result);
        } else {

          // IF
          _reject(_result);
        }

      }, (_result) => _reject(_result) );
    }


    /**
     * Watch a Single Request until it is ready or failed
     *
     * @param _requestid
     * @param _callback
     */
    public watchRequest(_requestid: string): Promise<ApiResult<RequestPollResult>> {
      return new Promise( ( _resolve, _reject ) => {
        this.buildAndStartRequestCallback(_requestid , _resolve, _reject);
      });
    }


    private callbacks = [];
    public addLogger = (_callback: Function) => {
      this.callbacks.push(_callback);
    }

    private log = (_error) => {
      for (var i = 0; i < this.callbacks.length; i++) {
        this.callbacks[i](_error);
      }
    }

    /**
     * transform camel case attribute names to lodashed names
     * @param _attributes
     */
    private lodashify(_attributes: Object): Object {
      const tmp: Object = {};

      forEach(_attributes, (_val, _key) => {
        if (isPlainObject(_val)) {
          tmp[_key.replace(/([a-z0-9]+)([A-Z])/g, '$1_$2').toLowerCase()] = this.lodashify(_val);

        } else {
          tmp[_key.replace(/([a-z0-9]+)([A-Z])/g, '$1_$2').toLowerCase()] = _val;
        }
      });

      return tmp;
    }

    /**
     * transform lodashed attribute names to camel case names
     * @param _attributes 
     */
    private camelify(_attributes: Object): Object {
      const tmp: Object = {};

      forEach(_attributes, (_val, _key) => {
        if (_key.indexOf('_') === 0) {
          tmp[_key] = _val;
          return true;
        }

        if (isPlainObject(_val)) {
          tmp[_key.replace(/_([a-z0-9])/g, (all, letter) => letter.toUpperCase())] = this.camelify(_val);

        } else {
          tmp[_key.replace(/_([a-z0-9])/g, (all, letter) => letter.toUpperCase())] = _val;
        }
      });

      return tmp;
    }



}

export const api = new APIClass();
