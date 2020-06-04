import { APIClass, ApiResult, GenericApiResult, RequestOptions } from '../api';
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
     * @returns {any}
     * @private
     */
    _buildRequestOptions(_options?: RequestOptions): RequestOptions;
    /**
     * List Objects
     *
     *
     * @param _options
     * @param _callback
     * @returns {any}
     */
    list(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<GenericApiResult>>;
    /**
     * Get Single Object by UUID
     *
     * @param _uuid
     * @param _callback
     */
    get(_uuid: string, _callback?: Function): Promise<ApiResult<GenericApiResult>>;
    /**
    Return all IP Adresses for this locations
    */
    getLocationIPs(_uuid: string, _callback?: Function): Promise<ApiResult<GenericApiResult>>;
    /**
    Return all isoimages for this location
    */
    getLocationISOImages(_uuid: string, _callback?: Function): Promise<ApiResult<GenericApiResult>>;
    /**
    Return all networks for this location
    */
    getLocationNetworks(_uuid: string, _callback?: Function): Promise<ApiResult<GenericApiResult>>;
    /**
    Return all servers for this location
    */
    getLocationServers(_uuid: string, _callback?: Function): Promise<ApiResult<GenericApiResult>>;
    /**
    Return all snapshots for this location
    */
    getLocationSnapshots(_uuid: string, _callback?: Function): Promise<ApiResult<GenericApiResult>>;
    /**
    Return all storages for this location
    */
    getLocationStorages(_uuid: string, _callback?: Function): Promise<ApiResult<GenericApiResult>>;
    /**
    Return all storages for this location
    */
    getLocationTemplates(_uuid: string, _callback?: Function): Promise<ApiResult<GenericApiResult>>;
}
export { Location };
