
if (typeof(require) !== 'undefined') {
  require('es6-promise').polyfill();
  require('isomorphic-fetch');  
}




export interface Links<T> {
  /**
   * References to the current resultset
   */
  self?(): Promise<ApiResult<T>>;
  /**
   * References to the first portion of results
   */
  first?(): Promise<ApiResult<T>>;
  /**
   * References to the next portion of results
   */
  next?(): Promise<ApiResult<T>>;
  /**
   * References to the last portion of results
   */
  last?(): Promise<ApiResult<T>>;
}

export interface Meta {
  /**
   * the amount of datasets returned in this page of the response
   */
  count: number;
  /**
   * The total amount of datasets available without pagination
   */
  total: number;
  /**
   * The active limit of datasets per page
   */
  limit: number;
  /**
   * The current offset of total available datasets
   */
  offset: number;
  /**
   * The current page
   */
  page: number;
}

// tslint:disable-next-line: no-any
export type GenericApiResult = any;
export type VoidApiResult = void;

export interface ApiResult<T> {
  /**
   * Inidicates if the request itself was successfully sent to the API (no indication if the API operation was successful!)
   */
  success: boolean;
  /**
   * The result of the API operation
   */
  result: T;
  /**
   * The raw HTTP Response
   */
  response?: Response & { request?: Request };
  /**
   * The Request options
   */
  requestInit?: RequestInit;
  /**
   * Links to other resultsets of the pagination
   */
  links?: Links<T>;
  /**
   * Pagination meta data
   */
  meta?: Meta;
  /**
   * If this is a function, it can be used to watch the process of asynchronous requests. The returned Promise is resolved when the request finished
   */
  watch?: () => Promise<ApiResult<RequestPollResult>> | null;
  /**
   * A unique request id (generated by this client)
   */
  id?: string | null;
  /**
   * indicates if the 'request' has failed or 'json' parsing failed
   */
  failureType?: string | null;
}


export interface ApiSettings {
  /**
   * The endpoint URL
   */
  endpoint?: string;
  /**
   * A map of specific URL overrides that should go to a different endpoint (e.g. a sandbox to test new API)
   * format "path:endpoint", path can be regex (string start and end with '/')
   * @example
   * { '/myNewObject\/(.*)/': 'https://myNewApi.getsandbox.com/myNewObject' }
   */
  endpointOverrides?: { [key: string]: string; }; // override endpoint for specific paths, format "path:endpoint", path can be regex (string start and end with '/')
  /**
   * The API token
   */
  token?: string;
  /**
   * The User UUID
   */
  userId?: string;
  /**
   * Default pagination limit
   */
  limit?: number;
  /**
   * Default Watchdelay in ms
   */
  watchdelay?: number;
  /**
   * Api Client identifier (used for X-Api-Client header)
   */
  apiClient?: string;
  /**
   * A custom fetch method
   */
  fetch?: Function;

  /**
   * optional additional headers
   */
  additionalHeaders?: Record<string, string>;
}

export interface RequestOptions {
  /**
   * Page to get the resultset for
   */
  page?: number;
  /**
   * Maximum number of datasets to return per page
   */
  limit?: number;
  /**
   * Array of fields to return in the response (to reduce the size of the resultset)
   */
  fields?: string[];
  /**
   * Filters the results by a field
   * @example
   * "name=foo"
   */
  filter?: string[];
  /**
   * Field to sort the result after
   */
  sort?: string | string[];
}

export interface RequestPollResult {
  /**
   * Current status of the watched request
   */
  message: string;
  /**
   * Short status
   */
  status: string;
  /**
   * Time when the request was created
   */
  create_time: string;
}


export interface BaseRelationObject {
  object_name?: string;
  object_uuid?: string;
}

/**
 * interface with basic properties each object (server, storage ...) should have
 */
export interface BaseObject {
  object_uuid?: string;
  status?: string;
  name?: string;
  labels?: string[];
  location_uuid?: string;
  relations?: { [key: string]: BaseRelationObject[] };
}

export interface LogData {
  result: ApiResult<unknown>;
  response: Response;
  /**
   * Unique request id (generated by client)
   */
  id: string;
  requestInit: RequestInit;
}

export class GSError extends Error {
  result: ApiResult<GenericApiResult>;
  success = false;
  response: Response;

  constructor(message, result: ApiResult<any>) {
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
      endpointOverrides: {},
      token: '',
      userId: '',
      limit: 25,
      watchdelay: 1000,
      apiClient: 'gsclient-js'
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
      this.settings = {
        ...this.settings,
        ..._option
      }
    }

    /**
     * Start the API Request
     *
     * @param _path
     * @param _options
     * @param _callback
     * @returns {Promise}
     */
  public request(_path: string = '', _options: RequestInit, _callback: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<GenericApiResult>> {
    const options = {
      ..._options
    };

      // check if we should use another endpoint for this path (mocking)
      var endpoint = this.settings.endpoint;
      if (this.settings.endpointOverrides && typeof(this.settings.endpointOverrides) === 'object') {

        for (let _overridePath in this.settings.endpointOverrides) {
          if (this.settings.endpointOverrides.hasOwnProperty(_overridePath)) {
            const _overrideEndpoint = this.settings.endpointOverrides[_overridePath];

            if (_overridePath.match(/^\/(.*)\/$/) && _path.split('?')[0].match(new RegExp(RegExp.$1))) {
              endpoint = _overrideEndpoint;
              break;

            } else if (_path.split('?')[0] === _overridePath) {
              endpoint = _overrideEndpoint;
              break;

            } 
          }
        }
      }



      // Build Options
      const url: string = _path.search('https://') === 0 ? _path :  endpoint + _path; // on Links there is already
    options.headers = {
      ...options.headers || {},
      'X-Auth-UserId': this.settings.userId,
      'X-Auth-Token': this.settings.token,
      'X-Api-Client': this.settings.apiClient,
      ...this.settings.additionalHeaders || {}
    };

      // return results as object or text
      const getResult = (_response: Response, _rejectOnJsonFailure = true): Promise<GenericApiResult> => {
        return new Promise((_resolve, _reject) => {
          if (_response.status !== 204 && _response.headers.has('Content-Type') && _response.headers.get('Content-Type').indexOf('application/json') === 0) {
            _response.json()
              .then(json => {
                _resolve(json);
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
              for (let linkname in _result._links) {
                if (_result._links.hasOwnProperty(linkname)) {
                  links[linkname] = this.link(_result._links[linkname]);
                }
              }
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
            if (_callback !== undefined) {
              setTimeout(() => _callback(_response.clone(), result));
            }
          })
          .catch(() => {
            // tslint:disable-next-line: no-use-before-declare
            onFail(_response, _request, _requestInit, 'json');
          });
        };
        let errorCounter = 0;
        const onFail = (_response: Response, _request: Request, _requestInit: RequestInit, _failType = 'request') => {
          getResult(_response.clone(), false).then((_result) => {
            const result: ApiResult<GenericApiResult> = {
              success: false,
              result: _result,
              response: Object.assign(_response.clone(), { request: _request }),
              links: {},
              watch: null,
              id: 'apierror_' + (new Date()).getTime() + '_' + errorCounter,
              requestInit: _requestInit,
              failureType: _failType
            };
            ++errorCounter;

            this.log({
              result: result,
              response: _response.clone(),
              id: result.id,
              requestInit: result.requestInit
            });

            _reject( new GSError('Request Error', result) );
            if (_callback !== undefined) {
              setTimeout(() => _callback(_response.clone(), result));
            }
          });
        };


        const request = new Request(url, options);
        const promise = (this.settings.fetch || fetch)(request);
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
      for (let key in _options) {
        if (_options.hasOwnProperty(key)) {
          if (_options[key] !== undefined) {
            if (typeof _options[key] === 'object' && typeof _options[key].length === 'number') {
              if (_options[key].length > 0) {
                url.push(key + '=' + _options[key].join(','));
              }
            } else {
              url.push(key + '=' + _options[key]);
            }
          }
        }
      };

      return url.length > 0 ? ('?' + url.join('&')) : '';
    }


    /**
     * Start Get Call
     * @param _path
     * @param _callback
     */
  public get(_path: string, _options?: RequestOptions | ((response: Response, result: ApiResult<any>) => void), _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<GenericApiResult>> {
    if (typeof _options === 'object' && _options !== null) {
          _path += this.buildRequestURL( _options );
      }

      // If No Options but Callback is given
    if (_callback === undefined && typeof _options === 'function') {
          _callback = _options;
      }

      return this.request(_path, {method: 'GET'}, _callback );
    }

    /**
     * Start Delete Call
     * @param _path
     * @param _callback
     */
    public remove(_path: string, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<GenericApiResult>> {
      return this.request(_path, {method: 'DELETE'}, _callback );
    }


    /**
     * Send Post Request
     *
     * @param _path Endpoint
     * @param _attributes  Attributes for Post Body
     * @param _callback Optional Callback
     * @returns {Promise}
     */
    public post(_path: string, _attributes: Object, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<GenericApiResult>> {
      return this.request(_path, { method : 'POST', body  : JSON.stringify(_attributes), headers: {'Content-Type': 'application/json' } }, _callback );
    }

    /**
     * Send PAtCH Request
     *
     * @param _path Endpoint
     * @param _attributes  Attributes for Post Body
     * @param _callback Optional Callback
     * @returns {Promise}
     */
    public patch(_path: string, _attributes: Object, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<GenericApiResult>> {
      return this.request(_path, { method : 'PATCH', body  : JSON.stringify(_attributes), headers: {'Content-Type': 'application/json' } }, _callback );
    }


    /**
     * Generate URL for Linked Request. No Options are required because its in the URL already
     *
     * @param _link
     * @param _callback
     * @returns {Function}
     */
    private link( _link ): (_callback: (response: Response, result: ApiResult<GenericApiResult>) => void) => Promise<ApiResult<GenericApiResult>> {
      /**
       * generate Function that has an Optional Callback
       */
      return (_callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<GenericApiResult>> => {
        return this.request(_link.href, {method: 'GET'}, _callback );
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
    public requestpooling(_requestid: string, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<{ [uuid: string]: RequestPollResult }>> {
      return this.request('/requests/' + _requestid, {method: 'GET'}, _callback );
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
    /**
     * Adds a new logger for error logging
     * @param _callback
     */
    public addLogger = (_callback: (logData: LogData) => void) => {
      this.callbacks.push(_callback);
    }

    private log = (_logData: LogData) => {
      for (var i = 0; i < this.callbacks.length; i++) {
        this.callbacks[i](_logData);
      }
    }
}

export const api = new APIClass();
