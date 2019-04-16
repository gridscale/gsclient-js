import { assignIn, isFunction, isUndefined } from 'lodash';

class Deleted {

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

         assignIn( this._defaults , _options );
    }

    _buildRequestOptions (_options?) {

        // Clone Defaults
        var defaults = assignIn({},this._defaults);

        // Add Options
        if ( !isUndefined( _options ) && !isFunction( _options ) ) {
            assignIn(defaults,_options);
        }

        // Return Default Values
        return defaults;
    }

    _deleted(_key, _options?,_callback?){
      var requestOptions = this._buildRequestOptions(_options);

      // Set Callback
      if ( isFunction( _options ) && isUndefined( _callback ) ) {
          _callback = _options
      }
        return this._api.get( '/objects/deleted/'+_key,_options,_callback)
    }


    ips( _options?,_callback? ) {
      return this._deleted('ips',_options,_callback);
    }

    isoimages( _options?,_callback? ) {
      return this._deleted('isoimages',_options,_callback);
    }

    networks( _options?,_callback? ) {
      return this._deleted('networks',_options,_callback);
    }

    servers( _options?,_callback? ) {
      return this._deleted('servers',_options,_callback);
    }

    snapshots( _options?,_callback? ) {
      return this._deleted('snapshots',_options,_callback);
    }

    storages( _options?,_callback? ) {
      return this._deleted('storages',_options,_callback);
    }

    templates( _options?,_callback? ) {
      return this._deleted('templates',_options,_callback);
    }

    paasServices( _options?,_callback? ) {
      return this._deleted('paas_services',_options,_callback);
    }


}

export { Deleted }
