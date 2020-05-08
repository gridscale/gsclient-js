import { assignIn, isFunction, isUndefined } from 'lodash';
import { APIClass, ApiResult, GSError, GenericApiResult } from '../api';
import { RequestOptions } from './GridscaleObjects';

class Location {

    // Naming
    public _api: APIClass;
    public _defaults: RequestOptions;
    public _basepath: string;


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
        this._basepath = '/objects/locations';

    }

    /**
     * Overwrite Default Settings for this Type
     *
     * @param _options
     */
    public setDefaults( _options: RequestOptions ) {

        assignIn( this._defaults , _options );
    }



    /**
     * Add Local Options with Defaults
     *
     *
     * @param _options
     * @returns {any}
     * @private
     */
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


    /**
     * List Objects
     *
     *
     * @param _options
     * @param _callback
     * @returns {any}
     */
    list(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<GenericApiResult>> {

        // Get Defaults
        const requestOptions = this._buildRequestOptions(_options);

        // Set Callback
        if ( isFunction( _options ) && isUndefined( _callback ) ) {
            _callback = _options;
        }

        return this._api.get( this._basepath , requestOptions , _callback);
    }



    /**
     * Get Single Object by UUID
     *
     * @param _uuid
     * @param _callback
     */
    get(_uuid: string, _callback?: Function): Promise<ApiResult<GenericApiResult>> {
        return this._api.get( this._basepath + '/' + _uuid, _callback);
    }

    /**
    Return all IP Adresses for this locations
    */
    getLocationIPs(_uuid: string, _callback?: Function): Promise<ApiResult<GenericApiResult>> {
        return this._api.get( this._basepath + '/' + _uuid + '/ips', _callback);
    }

    /**
    Return all isoimages for this location
    */
    getLocationISOImages(_uuid: string, _callback?: Function): Promise<ApiResult<GenericApiResult>>  {
        return this._api.get( this._basepath + '/' + _uuid + '/isoimages', _callback);
    }

    /**
    Return all networks for this location
    */
    getLocationNetworks(_uuid: string, _callback?: Function): Promise<ApiResult<GenericApiResult>> {
        return this._api.get( this._basepath + '/' + _uuid + '/networks', _callback);
    }

    /**
    Return all servers for this location
    */
    getLocationServers(_uuid: string, _callback?: Function): Promise<ApiResult<GenericApiResult>> {
        return this._api.get( this._basepath + '/' + _uuid + '/servers', _callback);

    }

    /**
    Return all snapshots for this location
    */
    getLocationSnapshots(_uuid: string, _callback?: Function): Promise<ApiResult<GenericApiResult>> {
        return this._api.get( this._basepath + '/' + _uuid + '/snapshots', _callback);
    }

    /**
    Return all storages for this location
    */
    getLocationStorages(_uuid: string, _callback?: Function): Promise<ApiResult<GenericApiResult>> {
        return this._api.get( this._basepath + '/' + _uuid + '/storages', _callback);
    }

    /**
    Return all storages for this location
    */
    getLocationTemplates(_uuid: string, _callback?: Function): Promise<ApiResult<GenericApiResult>> {
        return this._api.get( this._basepath + '/' + _uuid + '/templates', _callback);
    }

}

export { Location };
