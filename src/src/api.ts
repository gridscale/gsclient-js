import assignIn from 'lodash-es/assignIn';
import isArray from 'lodash-es/isArray';
import isFunction from 'lodash-es/isFunction';
import isObject from 'lodash-es/isObject';
import isUndefined from 'lodash-es/isUndefined';
import uniqueId from 'lodash-es/uniqueId';

require('whatwg-fetch');

class GSError extends Error {
    result:Object;
    constructor(message,result){
        super();
        this.name = 'GridscaleError';
        this.message = message || 'Default Message';
        this.result = result;
    }
}


(function() {
    // Local Settings
    var settings = {
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
    var storeToken = (_token,_userId) => {
        // Store Token
        settings.token = _token;
        settings.userId = _userId;
    };

    /**
     * Update local Request Options
     *
     * @param _option
     */
    var setOptions = (_option) => {

        // Assign new Values
        assignIn(settings, _option);
    };


    /**
     * Start the API Request
     *
     *
     * @param _path
     * @param _options
     * @param _callback
     * @returns {any}
     */
    var makeRequest = ( _path:string = '', _options:Object , _callback:Function= () => {} ) => {

        /**
         * Build Request Object
         * @type {{url: string; headers: {X-Auth-UserId: string; X-Auth-Token: string}}}
         */
        var options: any = !isObject(_options) ? {} :assignIn( {}, _options );

        // Build Options
        var url: string = _path.search('https://') == 0 ? _path :  settings.endpoint + _path; // on Links there is already
        options.headers = options.headers ? options.headers : {};
        options.headers["X-Auth-UserId"] = settings.userId;
        options.headers["X-Auth-Token"] = settings.token;
        options.headers["X-Api-Client"] = "expert";

        // Setup DEF
        var def = new Promise( ( _resolve, _reject ) => {
            // Fire Request
            var onSuccess = (_response: Response) => {
              setTimeout(()=>_callback( _response ));
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
                          links[linkname] = link( json._links[linkname] );
                      }
                      result.links = links;
                  }

                  /**
                   * On POST, PATCH and DELETE Request we will inject a watch Function into the Response so you can easiely start watching the current Job
                   */
                  if ( options['method'] == 'POST' || options['method'] == 'PATCH' || options['method'] == 'DELETE' ) {
                    if ( result.response.headers['x-request-id'] ){
                      result.watch = () => watchRequest( result.response.headers['x-request-id'] );
                    }
                  }

                  _resolve(result);
                })
                .catch(() => {
                  onFail(_response);
                });
            };
            var onFail = (_response: Response) => {
              setTimeout(()=>_callback( _response ));
              var result = {
                success: false,
                result: null,
                response: _response,
                id: uniqueId('apierror_' + (new Date()).getTime() +'_')
              };

              log({
                result: result,
                response: _response,
                id: result.id
              });

              _reject( new GSError('Request Error',result) );
            }

            var req = window['fetch'](url , options);
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
    var buildRequestURL = (_options) => {

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
    var get = (_path , _options? , _callback?) => {

        if ( isObject( _options ) ) {
            _path += buildRequestURL( _options );
        }

        // If No Options but Callback is given
        if ( isUndefined( _callback ) && isFunction( _options ) ) {
            _callback = _options;
        }

        return makeRequest(_path,{method:'GET'} ,_callback );
    };

    /**
     * Start Delete Call
     * @param _path
     * @param _callback
     */
    var remove = (_path , _callback?) => {
        return makeRequest(_path,{method:'DELETE'} ,_callback );
    };


    /**
     * Send Post Request
     *
     * @param _path Endpoint
     * @param _attributes  Attributes for Post Body
     * @param _callback Optional Callback
     * @returns {any}
     */
    var post = (_path , _attributes , _callback?) => {
        return makeRequest(_path,{ method : 'POST', body  : _attributes, json: true } ,_callback );
    }

/**
     * Send PAtCH Request
     *
     * @param _path Endpoint
     * @param _attributes  Attributes for Post Body
     * @param _callback Optional Callback
     * @returns {any}
     */
    var patch = (_path , _attributes , _callback?) => {
        return makeRequest(_path,{ method : 'PATCH', body  : _attributes, json: true } ,_callback );
    }


    /**
     * Generate URL for Linked Request. No Options are required because its in the URL already
     *
     * @param _link
     * @param _callback
     * @returns {any}
     */
    var link = ( _link ) => {

        /**
         * generate Function that has an Optional Callback
         */
        return function (  _callback? ){
            return makeRequest(_link.href,{method:'GET'} ,_callback );
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
    var requestpooling = ( _requestid , _callback?) => {
        return makeRequest('/requests/' + _requestid,{method:'GET'} ,_callback );
    };


    /**
     * Recursive creating of Request Proises
     *
     *
     * @param _requestid
     * @param _resolve
     * @param _reject
     */
    var buildAndStartRequestCallback = ( _requestid , _resolve, _reject) => {

        /**
         * Start new Request
         */
        requestpooling(_requestid).then((_result: any)=>{

            // Check Request Status to Decide if we start again
            if (_result.result[ _requestid ].status == 'pending') {

                setTimeout(()=>{
                    buildAndStartRequestCallback(_requestid , _resolve, _reject);
                }, settings.watchdelay );

            } else if ( _result.response.statusCode == 200 ) {

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
    var watchRequest = ( _requestid ) => {


        // Setup DEF
        var def = new Promise( ( _resolve, _reject ) => buildAndStartRequestCallback(_requestid , _resolve, _reject) );

        // Return DEF
        return def;
    }


    var callbacks = [];
    var addLogger = (_callback) => {
      callbacks.push(_callback);
    }

    var log = (_error) => {
      for (var i = 0; i < callbacks.length; i++) {
        callbacks[i](_error);
      }
    }


    module.exports = {
        request :       makeRequest,
        storeToken:     storeToken,
        setOptions:     setOptions,
        get :           get,
        remove :        remove,
        post:           post,
        patch:          patch,
        requestpooling: requestpooling,
        watchRequest: watchRequest,
        addLogger: addLogger
    }

}).call(this);
