var _ = require( 'lodash' );

export class ObjectStorage {

    // Naming
    public _api;
    public _defaults;


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
     * List Access Keys
     *
     *
     * @param _options
     * @param _callback
     * @returns {any}
     */
    accessKeys(_options?,_callback?){

        // Get Defaults
        var requestOptions = this._buildRequestOptions(_options);

        // Set Callback
        if ( _.isFunction( _options ) && _.isUndefined( _callback ) ) {
            _callback = _options
        }

        return this._api.get( '/objectstorages/access_keys' , requestOptions ,_callback)

    }



    /**
     * Get Single Object by UUID
     *
     * @param _uuid
     * @param _callback
     */
    accessKey(_access_key,_callback?) {
        return this._api.get( '/objectstorages/access_keys/' + _access_key,_callback);
    }

    /**
     * Remove Access Key
     *
     * @param _uuid
     * @param _callback
     */
    removeAccessKey(_access_key,_callback?) {
        return this._api.remove( '/objectstorages/access_keys/' + _access_key,_callback);
    }

    
    /**
     * Creates new Access Key
     * 
     * @param _callback
     * @returns {any|TRequest|LineCollection}
     */
    createAccessKey(_callback?) {
        return this._api.post( '/objectstorages/access_keys'  ,_callback);
    }



    /**
     * List Access Keys
     *
     *
     * @param _options
     * @param _callback
     * @returns {any}
     */
    buckets(_options?,_callback?){

        // Get Defaults
        var requestOptions = this._buildRequestOptions(_options);

        // Set Callback
        if ( _.isFunction( _options ) && _.isUndefined( _callback ) ) {
            _callback = _options
        }

        return this._api.get( '/objectstorages/buckets' , requestOptions ,_callback)

    }



    /**
     * Get Single Object by UUID
     *
     * @param _uuid
     * @param _callback
     */
    bucket(_bucket_name,_callback?) {
        return this._api.get( '/objectstorages/buckets/' + _bucket_name,_callback);
    }

}