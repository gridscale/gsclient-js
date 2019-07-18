import { assignIn,isArray, isFunction, isObject, isUndefined, uniqueId } from 'lodash';

require('es6-promise').polyfill();
require('isomorphic-fetch');

class GSError extends Error {
    result:Object;
    constructor(message,result){
        super();
        this.name = 'GridscaleError';
        this.message = message || 'Default Message';
        this.result = result;
    }
}


class APIClass {
    // Local Settings
    private settings = {
        endpoint: 'https://api.gridscale.io',
        token: '',
        userId: '',
        limit: 50,
        watchdelay: 51
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
    private makeRequest( _path:string = '', _options:Object , _callback:Function= () => {} ) {

        /**
         * Build Request Object
         * @type {{url: string; headers: {X-Auth-UserId: string; X-Auth-Token: string}}}
         */
        var options: any = !isObject(_options) ? {} :assignIn( {}, _options );

        // Build Options
        var url: string = _path.search('https://') == 0 ? _path :  this.settings.endpoint + _path; // on Links there is already
        options.headers = options.headers ? options.headers : {};
        options.headers["X-Auth-UserId"] = this.settings.userId;
        options.headers["X-Auth-Token"] = this.settings.token;
        options.headers["X-Api-Client"] = "expert";

        // Setup DEF
        var def = new Promise( ( _resolve, _reject ) => {
            // Fire Request
            var onSuccess = (_response: Response) => {
              _response['statusCode'] = _response.status;
              setTimeout(()=>_callback( _response ));
              if (_response.status != 204 && _response.headers.has('Content-Type') && _response.headers.get('Content-Type') == 'application/json') {
                _response.json()
                  .then((json) => {
                    var result = {
                      success: true,
                      result: json,
                      response: _response,
                      links: {},
                      watch: null
                    };

                    // Check for Links and generate them as Functions
                    if ( json && json._links ) {
                        var links = {};
                        for( var linkname in json._links ) {
                            links[linkname] = this.link( json._links[linkname] );
                        }
                        result.links = links;
                    }

                    /**
                     * On POST, PATCH and DELETE Request we will inject a watch Function into the Response so you can easiely start watching the current Job
                     */
                    if ( options['method'] == 'POST' || options['method'] == 'PATCH' || options['method'] == 'DELETE' ) {
                      if ( result.response.headers.has('x-request-id') ){
                        result.watch = () => this.watchRequest( result.response.headers.get('x-request-id') );
                      }
                    }

                    _resolve(result);
                  })
                  .catch(() => {
                    onFail(_response);
                  });
                } else {
                  _response.body.getReader().read().then((_body) => {
                    var result = {
                      success: true,
                      result: _body.value,
                      response: _response,
                      watch: null
                    };

                    /**
                     * On POST, PATCH and DELETE Request we will inject a watch Function into the Response so you can easiely start watching the current Job
                     */
                    if ( options['method'] == 'POST' || options['method'] == 'PATCH' || options['method'] == 'DELETE' ) {
                      if ( result.response.headers.has('x-request-id') ){
                        result.watch = () => this.watchRequest( result.response.headers.get('x-request-id') );
                      }
                    }

                    _resolve(result);
                  });

                }
            };
            var onFail = (_response: Response) => {
              _response['statusCode'] = _response.status;
              setTimeout(()=>_callback( _response ));
              var result = {
                success: false,
                result: null,
                response: _response,
                id: uniqueId('apierror_' + (new Date()).getTime() +'_')
              };

              this.log({
                result: result,
                response: _response,
                id: result.id
              });

              _reject( new GSError('Request Error',result) );
            }

            var req = fetch(url , options);
            req
              .then((_response) => {
                if (_response.ok) {
                  // The promise does not reject on HTTP errors
                  onSuccess(_response);

                } else {
                  onFail(_response);
                }
              })
              .catch((_response) => {
                onFail(_response);
              });

            // Return promise
            return req;
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
