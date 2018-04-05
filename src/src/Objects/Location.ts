var _ = require( 'lodash' );

class Location {

    // Naming
    public _api;
    public _defaults;
    public _basepath:String;


    /**
     * Create Object Endpoint
     *
     *
     * @param _api API Class Instance
     * @param _path Path to the Object
     */
    constructor(_api){
        this._api = _api;

        this._defaults = {
            "page": 0,
            "limit" : 25
        }
        this._basepath = '/objects/locations';

    }

    /**
     * Overwrite Default Settings for this Type
     *
     * @param _options
     */
    public setDefaults( _options ) {

        _.assignIn( this._defaults , _options );
    }



    /**
     * Add Local Options with Defaults
     *
     *
     * @param _options
     * @returns {any}
     * @private
     */
    _buildRequestOptions (_options?) {

        // Clone Defaults
        var defaults = _.assignIn({},this._defaults);

        // Add Options
        if ( !_.isUndefined( _options ) && !_.isFunction( _options ) ) {
            _.assignIn(defaults,_options);
        }

        // Return Default Values
        return defaults;
    }


    /**
     * List Objects
     *
     *
     * @param _options
     * @param _callback
     * @returns {any}
     */
    list(_options?,_callback?){

        // Get Defaults
        var requestOptions = this._buildRequestOptions(_options);

        // Set Callback
        if ( _.isFunction( _options ) && _.isUndefined( _callback ) ) {
            _callback = _options
        }

        var req = this._api.get( this._basepath , requestOptions ,_callback);

        return req

    }



    /**
     * Get Single Object by UUID
     *
     * @param _uuid
     * @param _callback
     */
    get(_uuid,_callback?) {
        return this._api.get( this._basepath +'/' + _uuid,_callback);
    }

    /**
    Return all IP Adresses for this locations
    */
    getLocationIPs(_uuid,_callback?) {
        return this._api.get( this._basepath +'/' + _uuid + '/ips',_callback);
    }

}

export { Location }
