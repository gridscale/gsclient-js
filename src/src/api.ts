import { assignIn,isArray, isFunction, isObject, isUndefined, uniqueId, assign } from 'lodash';

require('es6-promise').polyfill();
require('isomorphic-fetch');

class GSError extends Error {
    result:Object;
    constructor(message,result){
        super();
        this.name = 'GridscaleError';

        // try to assemble message with more details from result
        if (result.response && result.response.request && result.response.request.method && typeof (result.response.status) !== 'undefined' && result.response.request.url) {
          this.message = 'Error : ' + result.response.request.method + ' | ' + result.response.status + ' | ' + result.response.request.url.split('?')[0];
        } else {
          this.message = message || 'Default Message';
        }

        
        this.result = result;
    }
}


class APIClass {
    // Local Settings
    private settings = {
        endpoint: 'https://api.gridscale.io',
        token: '',
        userId: '',
        limit: 25,
        watchdelay: 51,
        apiClient: "gs_api_node"
    };

    /**
     * Store api client in current session
     * @param _client  String
     */
    public storeClient(_client) {
        this.settings.apiClient = _client;
    };

    /**
     * Store Token for Current Session
     * @param _token Secret Token
     */
    public storeToken(_token,_userId) {
        // Store Token
        this.settings.token = _token;
        this.settings.userId = _userId;
    };

    /**
     * Update local Request Options
     *
     * @param _option
     */
    public setOptions = (_option) => {

        // Assign new Values
        assignIn(this.settings, _option);
    };


    public request(_path:string = '', _options:Object , _callback:Function= () => {}) {
      return this.makeRequest(_path, _options, _callback);
    }

    /**
     * Start the API Request
     *
     *
     * @param _path
     * @param _options
     * @param _callback
     * @returns {any}
     */
    private makeRequest( _path:string = '', _options:RequestInit , _callback:Function= () => {} ) {

        /**
         * Build Request Object
         * @type {{url: string; headers: {X-Auth-UserId: string; X-Auth-Token: string}}}
         */
      var options: RequestInit = !isObject(_options) ? {} :assignIn( {}, _options );

        // Build Options
        var url: string = _path.search('https://') == 0 ? _path :  this.settings.endpoint + _path; // on Links there is already
        options.headers = options.headers ? options.headers : {};
        options.headers["X-Auth-UserId"] = this.settings.userId;
        options.headers["X-Auth-Token"] = this.settings.token;
        options.headers["X-Api-Client"] = this.settings.apiClient;

        // return results as object or text
        var getResult = (_response: Response, _rejectOnJsonFailure = true): Promise<any> => {
          return new Promise((_resolve, _reject) => {
            if (_response.status != 204 && _response.headers.has('Content-Type') && _response.headers.get('Content-Type').indexOf('application/json') === 0) {
              _response.json()
                .then(json => _resolve(json))
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
        }

        // Setup DEF
        var def = new Promise( ( _resolve, _reject ) => {
            // Fire Request
          var onSuccess = (_response: Response, _request: Request, _requestInit: RequestInit) => {
              getResult(_response.clone()).then((_result) => {
                var result = {
                  success: true,
                  result: _result,
                  response: _response.clone(),
                  links: {},
                  watch: null,
                  id: null,
                  requestInit: _requestInit
                };

                // Check for Links and generate them as Functions
                if (_result && _result._links) {
                  var links = {};
                  for (var linkname in _result._links) {
                    links[linkname] = this.link(_result._links[linkname]);
                  }
                  result.links = links;
                }

                /**
                 * On POST, PATCH and DELETE Request we will inject a watch Function into the Response so you can easiely start watching the current Job
                 */
                if (options['method'] == 'POST' || options['method'] == 'PATCH' || options['method'] == 'DELETE') {
                  if (result.response.headers.has('x-request-id')) {
                    result.watch = () => this.watchRequest(result.response.headers.get('x-request-id'));
                  }
                }

                _resolve(result);
                setTimeout(() => _callback(_response.clone(), result));
              })
              .catch(() => {
                onFail(_response, _request, _requestInit, 'json');
              });
          }
          var onFail = (_response: Response, _request: Request, _requestInit: RequestInit, _failType="request") => {            
              getResult(_response.clone(), false).then((_result) => {

                var result = {
                  success: false,
                  result: _result,
                  response: assign(_response.clone(), { request: _request }),
                  links: {},
                  watch: null,
                  id: uniqueId('apierror_' + (new Date()).getTime() +'_'),
                  requestInit: _requestInit,
                  failureType: _failType
                };

    

                this.log({
                  result: result,
                  response: _response.clone(),
                  id: result.id,
                  requestInit: result.requestInit
                });

                _reject( new GSError('Request Error',result) );
                setTimeout(() => _callback(_response.clone(), result));
              });
            };


            var request = new Request(url, options);
            var promise = fetch(request);
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

    };




    /**
     * Build Option URL to expand URL
     * @param _options
     * @returns {string}
     */
    private buildRequestURL(_options) {

        // Push Valued
        var url = [];

        // Add Options to URL
        for (var key in _options) {
            if ( isArray(_options[key]) ){
                url.push(key +'=' +_options[key].join(',') );
            } else {
                url.push(key +'=' +_options[key] );
            }
        }

        return url.length > 0 ? ('?'+url.join('&')) : '';
    };





    /**
     * Start Get Call
     * @param _path
     * @param _callback
     */
    public get(_path , _options? , _callback?) {

        if ( isObject( _options ) ) {
            _path += this.buildRequestURL( _options );
        }

        // If No Options but Callback is given
        if ( isUndefined( _callback ) && isFunction( _options ) ) {
            _callback = _options;
        }

        return this.makeRequest(_path,{method:'GET'} ,_callback );
    };

    /**
     * Start Delete Call
     * @param _path
     * @param _callback
     */
    public remove(_path , _callback?) {
        return this.makeRequest(_path,{method:'DELETE'} ,_callback );
    };


    /**
     * Send Post Request
     *
     * @param _path Endpoint
     * @param _attributes  Attributes for Post Body
     * @param _callback Optional Callback
     * @returns {any}
     */
    public post(_path , _attributes , _callback?) {
        return this.makeRequest(_path,{ method : 'POST', body  : JSON.stringify(_attributes), headers: {'Content-Type': 'application/json' } } ,_callback );
    }

/**
     * Send PAtCH Request
     *
     * @param _path Endpoint
     * @param _attributes  Attributes for Post Body
     * @param _callback Optional Callback
     * @returns {any}
     */
    public patch(_path , _attributes , _callback?) {
        return this.makeRequest(_path,{ method : 'PATCH', body  : JSON.stringify(_attributes), headers: {'Content-Type': 'application/json' } } ,_callback );
    }


    /**
     * Generate URL for Linked Request. No Options are required because its in the URL already
     *
     * @param _link
     * @param _callback
     * @returns {any}
     */
    private link( _link ) {

        /**
         * generate Function that has an Optional Callback
         */
        return function (  _callback? ){
            return this.makeRequest(_link.href,{method:'GET'} ,_callback );
        };

    }


    /**
     * Start Pooling on Request Endpoint
     *
     *
     * @param _requestid
     * @param _callback
     * @returns {any}
     */
    public requestpooling ( _requestid , _callback?) {
        return this.makeRequest('/requests/' + _requestid,{method:'GET'} ,_callback );
    };


    /**
     * Recursive creating of Request Proises
     *
     *
     * @param _requestid
     * @param _resolve
     * @param _reject
     */
    public buildAndStartRequestCallback( _requestid , _resolve, _reject) {

        /**
         * Start new Request
         */
        this.requestpooling(_requestid).then((_result: any)=>{
            // Check Request Status to Decide if we start again
            if (_result.result[ _requestid ].status == 'pending') {

                setTimeout(()=>{
                    this.buildAndStartRequestCallback(_requestid , _resolve, _reject);
                }, this.settings.watchdelay );

            } else if ( _result.response.status == 200 ) {

                // Job done
                _resolve(_result);
            } else {

                // IF
                _reject(_result);
            }

        },(_result) => _reject(_result) );
    }


    /**
     * Watch a Single Request until it is ready or failed
     *
     * @param _requestid
     * @param _callback
     */
    public watchRequest( _requestid ) {
        // Setup DEF
        var def = new Promise( ( _resolve, _reject ) => {
          api.buildAndStartRequestCallback(_requestid , _resolve, _reject);
        });

        // Return DEF
        return def;
    }


    private callbacks = [];
    public addLogger = (_callback) => {
      this.callbacks.push(_callback);
    }

    private log = (_error) => {
      for (var i = 0; i < this.callbacks.length; i++) {
        this.callbacks[i](_error);
      }
    }




}

export const api = new APIClass();
