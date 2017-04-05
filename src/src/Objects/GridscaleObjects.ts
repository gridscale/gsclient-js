import * as _ from "lodash";

class GridscaleObjects {

    // Naming
    public _api;
    public _defaults;
    public _basepath:String;


    /**
     * Create Object Endpoint
     * 
     * @param _api API Class Instance
     * @param _path Path to the Object
     */
    constructor(_api,_path){
        this._api = _api;

        this._defaults = {
            "page": 0,
            "limit" : 25
        }
        this._basepath = _path;

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
     * Get Single Object by UUID
     *
     * @param _uuid
     * @param _callback
     */
    remove(_uuid,_callback?) {
        return this._api.remove( this._basepath +'/' + _uuid,_callback);
    }
    
    

    /**
     * Create object
     * @param _attributes
     * @param _callback
     * @returns {any|TRequest|LineCollection}
     */
    create(_attributes,_callback?) {
        return this._api.post(  this._basepath , _attributes ,_callback);
    }
    
    

    /**
     * Patch object
     * @param _attributes
     * @param _callback
     * @returns {any|TRequest|LineCollection}
     */
    patch(_uuid,_attributes,_callback?) {
        return this._api.patch(  this._basepath +'/' + _uuid , _attributes ,_callback);
    }


    /**
     * Wrapper for Subtypes to save some lines of code 
     *
     * @param _uuid Object UUID
     * @param _callback Callback Function
     */
    _sub(_type, _uuid,_options?,_callback?){

        // Get Defaults
        var requestOptions = this._buildRequestOptions(_options);

        // Set Callback
        if ( _.isFunction( _options ) && _.isUndefined( _callback ) ) {
            _callback = _options
        }

        return this._api.get( this._basepath +'/' + _uuid +'/' + _type , requestOptions ,_callback);
    }
    
    
    

    /**
     * Get Single Sub Object by UUID
     * 
     * @param _type
     * @param _uuid
     * @param _sub_uuid
     * @param _callback
     * @private
     */
    _sub_get(_type,_uuid,_sub_uuid,_callback?) {
        return this._api.get( this._basepath +'/' + _uuid +'/' + _type + '/' + _sub_uuid ,_callback);
    }
    
    
    

    /**
     * Post to Subtype ob Object
     * 
     * @param _type
     * @param _uuid
     * @param _attributes
     * @param _callback
     * @returns {TRequest|any}
     * @private
     */
    _sub_post(_type,_uuid,_attributes,_callback?) {
        return this._api.post( this._basepath +'/' + _uuid +'/' + _type , _attributes ,_callback);
    }


    /**
     * Patch Subobject
     * 
     * @param _type
     * @param _uuid
     * @param _sub_uuid
     * @param _attributes
     * @param _callback
     * @returns {any|TRequest}
     * @private
     */
    _sub_patch(_type,_uuid,_sub_uuid,_attributes,_callback?) {
        return this._api.patch( this._basepath +'/' + _uuid +'/' + _type + '/' + _sub_uuid , _attributes ,_callback);
    }


    /**
     * Remove Sub Type from Object
     * 
     * 
     * @param _type
     * @param _uuid
     * @param _sub_uuid
     * @param _callback
     * @returns {any|void|PromiseLike<void>}
     * @private
     */
    _sub_remove(_type,_uuid,_sub_uuid,_callback?) {
        return this._api.remove( this._basepath +'/' + _uuid +'/' + _type + '/' + _sub_uuid, _callback);
    }

    
    /**
     *  Get Events for this Object
     * 
     * @param _uuid Object UUID
     * @param _callback Callback Function
     */
    events(_uuid,_options?,_callback?){
        return this._sub('events',_uuid,_options,_callback);
    }
}

export {GridscaleObjects}