import { APIClass, ApiResult, RequestOptions } from '../api';
import * as models from './model/models';
declare class Location {
    _api: APIClass;
    _defaults: RequestOptions;
    _basepath: string;
    /**
     * Create Object Endpoint
     *
     *
     * @param _api API Class Instance
     * @param _path Path to the Object
     */
    constructor(_api: APIClass);
    /**
     * Overwrite Default Settings for this Type
     *
     * @param _options
     */
    setDefaults(_options: RequestOptions): void;
    /**
     * Add Local Options with Defaults
     *
     *
     * @param _options
     * @returns {RequestOptions}
     * @private
     */
    _buildRequestOptions(_options?: RequestOptions): RequestOptions;
    /**
     * List Objects
     *
     *
     * @param _options
     * @param _callback
     * @returns {Promise<ApiResult<models.LocationsGetResponse>>}
     */
    list(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.LocationsGetResponse>>;
    /**
     * Get Single Object by UUID
     *
     * @param _uuid
     * @param _callback
     */
    get(_uuid: string, _callback?: Function): Promise<ApiResult<models.LocationGetResponse>>;
    /**
    Return all IP Adresses for this locations
    */
    getLocationIPs(_uuid: string, _callback?: Function): Promise<ApiResult<models.IpsGetResponse>>;
    /**
    Return all isoimages for this location
    */
    getLocationISOImages(_uuid: string, _callback?: Function): Promise<ApiResult<models.IsoimagesGetResponse>>;
    /**
    Return all networks for this location
    */
    getLocationNetworks(_uuid: string, _callback?: Function): Promise<ApiResult<models.NetworksGetResponse>>;
    /**
    Return all servers for this location
    */
    getLocationServers(_uuid: string, _callback?: Function): Promise<ApiResult<models.ServersGetResponse>>;
    /**
    Return all snapshots for this location
    */
    getLocationSnapshots(_uuid: string, _callback?: Function): Promise<ApiResult<models.SnapshotGetResponse>>;
    /**
    Return all storages for this location
    */
    getLocationStorages(_uuid: string, _callback?: Function): Promise<ApiResult<models.StoragesGetResponse>>;
    /**
    Return all storages for this location
    */
    getLocationTemplates(_uuid: string, _callback?: Function): Promise<ApiResult<models.TemplatesGetResponse>>;
}
export { Location };
