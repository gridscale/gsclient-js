

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

    // Dependecy
    var request = require('request');
    var _ = require('lodash');
    var Promise = require("bluebird");


    // Local Settings
    var settings = {
        endpoint: 'https://apidev.gridscale.io',
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
        _.assignIn(settings, _option);
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
    var makeRequest = ( _path:String = '', _options:Object , _callback:Function= () => {} ) => {

        /**
         * Build Request Object
         * @type {{url: string; headers: {X-Auth-UserId: string; X-Auth-Token: string}}}
         */
        var options = !_.isObject(_options) ? {} :_.assignIn( {}, _options );

        // Build Options
        options.url = _path.search('https://') == 0 ? _path :  settings.endpoint + _path; // on Links there is already
        options.headers = options.headers ? options.headers : {};
        options.headers["X-Auth-UserId"] = settings.userId;
        options.headers["X-Auth-Token"] = settings.token;


        // Setup DEF
        var def = new Promise( ( _resolve, _reject ) => {
            // Fire Request
            request(options,requestCallback(_resolve, _reject,_callback));
        } );


        // Catch all Errors and


        // Return DEF
        return def;

    };


    /**
     * Building Callback for REQUEST
     *
     *
     * @param _resolve
     * @param _reject
     * @param _callback
     * @returns {(error:any, response:any, body:any)=>undefined}
     */
    var requestCallback = ( _resolve , _reject , _callback:Function = () => {} ) => {

        // Returning a new Function
        return ( _error , _response , _body ) => {

            // Build Result Object
            var result;

            if (!_error && _response.statusCode < 400) {

                // Parse JSON if need
                var parsedResult =  (_.isUndefined(_body) ||  _.isNull(_body) ) ? false : _.isObject(_body) ? _body : ( _body.length > 0 ? JSON.parse(_body) : '' );

                result = {
                    success     : true,
                    result      : parsedResult,
                    response    : _response.toJSON()
                };

                // Check for Links and generate them as Functions
                if ( parsedResult && parsedResult._links ) {
                    var links = {};
                    for( var linkname in parsedResult._links ) {
                        links[linkname] = link( parsedResult._links[linkname] );
                    }
                    result.links = links;
                }

                /**
                 * On POST, PATCH and DELETE Request we will inject a watch Function into the Response so you can easiely start watching the current Job
                 */
                if ( result.response.request['method'] == 'POST' || result.response.request['method'] == 'PATCH' || result.response.request['method'] == 'DELETE' ) {
                  if ( result.response.headers['x-request-id'] ){
                    result.watch = () => watchRequest( result.response.headers['x-request-id'] );
                  }
                }

                _resolve( result );

            } else {

                result = {
                    success: false,
                    response: _response,
                    id: _.uniqueId('apierror_' + (new Date()).getTime() +'_')
                };

                log({
                  result: result,
                  error: _error,
                  response:_response,
                  id: result.id
                });

                _reject( new GSError('Request Error',result) );

            }

            setTimeout(()=>{

                _callback( result );

            });
        }
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
            if ( _.isArray(_options[key]) ){
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

        if ( _.isObject( _options ) ) {
            _path += buildRequestURL( _options );
        }

        // If No Options but Callback is given
        if ( _.isUndefined( _callback ) && _.isFunction( _options ) ) {
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
        requestpooling(_requestid).then((_result)=>{

            // Check Request Status to Decide if we start again
            if (_result.response.statusCode == 202) {

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
