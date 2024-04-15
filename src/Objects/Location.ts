import { APIClass, ApiResult, GenericApiResult, RequestOptions, VoidApiResult } from '../api';
import * as models from './../Specs';

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
        this._defaults = {
            ...this._defaults,
            ..._options
        };
    }



    /**
     * Add Local Options with Defaults
     *
     *
     * @param _options
     * @returns {RequestOptions}
     * @private
     */
    _buildRequestOptions (_options?: RequestOptions) {

        // Clone Defaults
        const defaults = {
            ...this._defaults,
            ..._options || {}
        };

        // Return Default Values
        return defaults;
    }



    /**
     * List Objects
     *
     *
     * @param _options
     * @param _callback
     * @returns {Promise<ApiResult<models.LocationsGetResponse>>}
     */
    list(_options?: RequestOptions, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<models.LocationsGetResponse>> {

        // Get Defaults
        const requestOptions = this._buildRequestOptions(_options);

        // Set Callback
        if (typeof _options === 'function' && _callback === undefined) {
            _callback = _options;
        }

        return this._api.get( this._basepath , requestOptions , _callback);
    }

    /**
     * Create location
     * @param _attributes
     * @param _callback
     * @returns {Promise<ApiResult<CreateResult>>}
     */
    create(_attributes: models.LocationCreate, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<models.CreateResponse>> {
        return this._api.post(  this._basepath , _attributes , _callback);
    }


    /**
     * Patch location
     * @param _attributes
     * @param _callback
     * @returns {Promise<ApiResult<VoidApiResult>>}
     */
    patch(_uuid: string, _attributes: models.LocationUpdate, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<VoidApiResult>> {
        return this._api.patch(  this._basepath + '/' + _uuid , _attributes , _callback);
    }

    /**
     * remove Single location by UUID
     *
     * @param _uuid
     * @param _callback
     */
    remove(_uuid: string, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<VoidApiResult>> {
        return this._api.remove( this._basepath + '/' + _uuid, _callback);
    }

    /**
     * Get Single Object by UUID
     *
     * @param _uuid
     * @param _callback
     */
    get(_uuid: string, _callback?: ((response: Response, result: ApiResult<any>) => void)): Promise<ApiResult<models.LocationGetResponse>> {
        return this._api.get( this._basepath + '/' + _uuid, _callback);
    }

    /**
    Return all IP Adresses for this locations
    */
    getLocationIPs(_uuid: string, _callback?: ((response: Response, result: ApiResult<any>) => void)): Promise<ApiResult<models.IpsGetResponse>> {
        return this._api.get( this._basepath + '/' + _uuid + '/ips', _callback);
    }

    /**
    Return all isoimages for this location
    */
    getLocationISOImages(_uuid: string, _callback?: ((response: Response, result: ApiResult<any>) => void)): Promise<ApiResult<models.IsoimagesGetResponse>> {
        return this._api.get( this._basepath + '/' + _uuid + '/isoimages', _callback);
    }

    /**
    Return all networks for this location
    */
    getLocationNetworks(_uuid: string, _callback?: ((response: Response, result: ApiResult<any>) => void)): Promise<ApiResult<models.NetworksGetResponse>> {
        return this._api.get( this._basepath + '/' + _uuid + '/networks', _callback);
    }

    /**
    Return all servers for this location
    */
    getLocationServers(_uuid: string, _callback?: ((response: Response, result: ApiResult<any>) => void)): Promise<ApiResult<models.ServersGetResponse>> {
        return this._api.get( this._basepath + '/' + _uuid + '/servers', _callback);

    }

    /**
    Return all snapshots for this location
    */
    getLocationSnapshots(_uuid: string, _callback?: ((response: Response, result: ApiResult<any>) => void)): Promise<ApiResult<models.SnapshotGetResponse>> {
        return this._api.get( this._basepath + '/' + _uuid + '/snapshots', _callback);
    }

    /**
    Return all storages for this location
    */
    getLocationStorages(_uuid: string, _callback?: ((response: Response, result: ApiResult<any>) => void)): Promise<ApiResult<models.StoragesGetResponse>> {
        return this._api.get( this._basepath + '/' + _uuid + '/storages', _callback);
    }

    /**
    Return all storages for this location
    */
    getLocationTemplates(_uuid: string, _callback?: ((response: Response, result: ApiResult<any>) => void)): Promise<ApiResult<models.TemplatesGetResponse>> {
        return this._api.get( this._basepath + '/' + _uuid + '/templates', _callback);
    }

}

export { Location };
