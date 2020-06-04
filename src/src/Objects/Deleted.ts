import { assignIn, isFunction, isUndefined } from 'lodash';
import { APIClass, RequestOptions } from '../api';

class Deleted {

    // Naming
    public _api: APIClass;
    public _defaults: RequestOptions;


    /**
     * Create Object Endpoint
     *
     *
     * @param _api API Class Instance
     * @param _path Path to the Object
     */
    constructor(_api: APIClass) {
        this._api = _api;

        this._defaults = {
            'page': 0,
            'limit' : 25
        };
    }

    /**
     * Overwrite Default Settings for this Type
     *
     * @param _options
     */
    public setDefaults( _options: RequestOptions ) {

         assignIn( this._defaults , _options );
    }

    _buildRequestOptions (_options?: RequestOptions) {

        // Clone Defaults
        const defaults = assignIn({}, this._defaults);

        // Add Options
        if ( !isUndefined( _options ) && !isFunction( _options ) ) {
            assignIn(defaults, _options);
        }

        // Return Default Values
        return defaults;
    }

    _deleted(_key: string, _options?: RequestOptions, _callback?: Function) {
      const requestOptions = this._buildRequestOptions(_options);

      // Set Callback
      if ( isFunction( _options ) && isUndefined( _callback ) ) {
          _callback = _options;
      }
        return this._api.get( '/objects/deleted/' + _key, _options, _callback);
    }


    ips( _options?: RequestOptions, _callback?: Function ) {
      return this._deleted('ips', _options, _callback);
    }

    isoimages( _options?: RequestOptions, _callback?: Function ) {
      return this._deleted('isoimages', _options, _callback);
    }

    networks( _options?: RequestOptions, _callback?: Function ) {
      return this._deleted('networks', _options, _callback);
    }

    servers( _options?: RequestOptions, _callback?: Function ) {
      return this._deleted('servers', _options, _callback);
    }

    snapshots( _options?: RequestOptions, _callback?: Function ) {
      return this._deleted('snapshots', _options, _callback);
    }

    storages( _options?: RequestOptions, _callback?: Function ) {
      return this._deleted('storages', _options, _callback);
    }

    templates( _options?: RequestOptions, _callback?: Function ) {
      return this._deleted('templates', _options, _callback);
    }

    paasServices( _options?: RequestOptions, _callback?: Function ) {
      return this._deleted('paas_services', _options, _callback);
    }


}

export { Deleted };
