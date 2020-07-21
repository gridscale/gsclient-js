import { GridscaleObjects } from './GridscaleObjects';
import { APIClass, ApiResult, RequestOptions, VoidApiResult } from '../api';
import * as models from './model/models';
interface Server {
    list(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.ServersGetResponse>>;
    get(_uuid: string, _callback?: Function): Promise<ApiResult<models.ServerGetResponse>>;
    create(_attributes: Object, _callback?: Function): Promise<ApiResult<models.ServerCreateResponse>>;
}
declare class Server extends GridscaleObjects {
    constructor(_api: APIClass);
    /**
     * Start/Stop Server
     *
     * @param _uuid
     * @param _power
     * @param _callback
     * @returns {any|TRequest}
     */
    power(_uuid: string, _power: Boolean, _callback?: Function): Promise<ApiResult<VoidApiResult>>;
    /**
     * Send ACPI-Shutdown to User
     *
     * @param _uuid
     * @param _callback
     * @returns {any|TRequest}
     */
    shutdown(_uuid: string, _callback?: Function): Promise<ApiResult<VoidApiResult>>;
    /**
     *  IP Adress Handling
     *
     */
    /**
     *  Get IPs for this Object
     *
     * @param _uuid Object UUID
     * @param _callback Callback Function
     */
    ips(_uuid: string, _options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.LinkedIpsGetResponse>>;
    /**
     * Get IP that is in Relation with Server
     *
     * @param _uuid
     * @param _ip_uuid
     * @param _callback
     * @returns {any}
     */
    ip(_uuid: string, _ip_uuid: string, _callback?: Function): Promise<ApiResult<models.LinkedIpGetResponse>>;
    /**
     * Relate an IP with the Server
     *
     * @param _uuid Server UUID
     * @param _ip_uuid IP UUID
     * @param _callback  Callback Function
     * @returns {TRequest|any}
     */
    addIp(_uuid: string, _ip_uuid: string, _callback?: Function): Promise<ApiResult<VoidApiResult>>;
    /**
     * Remove IP-Adress from Server
     *
     *
     * @param _uuid Server UUID
     * @param _ip_uuid IP UUID
     * @param _callback
     * @returns {any|void|PromiseLike<void>}
     */
    removeIp(_uuid: string, _ip_uuid: string, _callback?: Function): Promise<ApiResult<VoidApiResult>>;
    /**
     *  Storages
     *
     */
    /**
     *  Get Storages for this Object
     *
     * @param _uuid Object UUID
     * @param _callback Callback Function
     */
    storages(_uuid: string, _options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.LinkedStoragesGetResponse>>;
    /**
     * Get single Storage <=> Server Relation
     *
     * @param _uuid
     * @param _storage_uuid
     * @param _callback
     * @returns {any}
     */
    storage(_uuid: string, _storage_uuid: string, _callback?: Function): Promise<ApiResult<models.LinkedStorageGetResponse>>;
    /**
     * Patch Storage that is related to a Server i flag it as Bootdevice
     *
     *
     * @param _uuid
     * @param _storage_uuid
     * @param _attribute
     * @param _callback
     * @returns {any|TRequest}
     */
    patchStorage(_uuid: string, _storage_uuid: string, _attribute: Object, _callback?: Function): Promise<ApiResult<VoidApiResult>>;
    /**
     * Relate Storage with Server
     *
     * @param _uuid Server UUID
     * @param _storage_uuid IP UUID
     * @param _callback  Callback Function
     * @returns {TRequest|any}
     */
    addStorage(_uuid: string, _storage_uuid: string, _callback?: Function): Promise<ApiResult<VoidApiResult>>;
    /**
     * Remove Storage from Server
     *
     *
     * @param _uuid Server UUID
     * @param _storage_uuid IP UUID
     * @param _callback
     * @returns {any|void|PromiseLike<void>}
     */
    removeStorage(_uuid: string, _storage_uuid: string, _callback?: Function): Promise<ApiResult<VoidApiResult>>;
    /**
     *  Metrics
     *
     */
    /**
     *  Get Metrics for this Object
     *
     * @param _uuid Object UUID
     * @param _callback Callback Function
     */
    metrics(_uuid: string, _options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.ServerMetricsGetResponse>>;
    /**
     *  Isoimages
     *
     */
    /**
     *  Get Storages for this Object
     *
     * @param _uuid Object UUID
     * @param _callback Callback Function
     */
    isoimages(_uuid: string, _options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.LinkedIsoimagesGetResponse>>;
    /**
     * Get single Storage <=> Server Relation
     *
     * @param _uuid
     * @param _isoimage_uuid
     * @param _callback
     * @returns {any}
     */
    isoimage(_uuid: string, _isoimage_uuid: string, _callback?: Function): Promise<ApiResult<models.LinkedIsoimageGetResponse>>;
    /**
     * Patch Storage that is related to a Server i flag it as Bootdevice
     *
     *
     * @param _uuid
     * @param _isoimage_uuid
     * @param _attribute
     * @param _callback
     * @returns {any|TRequest}
     */
    patchIsoimage(_uuid: string, _isoimage_uuid: string, _attribute: Object, _callback?: Function): Promise<ApiResult<VoidApiResult>>;
    /**
     * Relate Storage with Server
     *
     * @param _uuid Server UUID
     * @param _isoimage_uuid IP UUID
     * @param _callback  Callback Function
     * @returns {TRequest|any}
     */
    addIsoimage(_uuid: string, _isoimage_uuid: string, _callback?: Function): Promise<ApiResult<VoidApiResult>>;
    /**
     * Remove Isoimage from Server
     *
     *
     * @param _uuid Server UUID
     * @param _isoimage_uuid IP UUID
     * @param _callback
     * @returns {any|void|PromiseLike<void>}
     */
    removeIsoimage(_uuid: string, _isoimage_uuid: string, _callback?: Function): Promise<ApiResult<VoidApiResult>>;
    /**
     *  Networks
     *
     */
    /**
     *  Get NEtworks for this Object
     *
     * @param _uuid Server UUID
     * @param _callback Callback Function
     */
    networks(_uuid: string, _options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.LinkedNetworksGetResponse>>;
    /**
     * Get single NEtwork <=> Server Relation
     *
     * @param _uuid
     * @param _network_uuid Network UUID
     * @param _callback
     * @returns {any}
     */
    network(_uuid: string, _network_uuid: string, _callback?: Function): Promise<ApiResult<models.LinkedNetworkGetResponse>>;
    /**
     * Patch Network that is related to a Server
     *
     * Attributes:
     *   bootdevice
     *   l3security
     *   ordering
     *
     *
     * @param _uuid
     * @param _network_uuid Network UUID
     * @param _attribute
     * @param _callback
     * @returns {any|TRequest}
     */
    patchNetwork(_uuid: string, _network_uuid: string, _attribute: Object, _callback?: Function): Promise<ApiResult<VoidApiResult>>;
    /**
     * Relate Storage with Server
     *
     * @param _uuid Server UUID
     * @param _network_uuid Network UUID
     * @param _callback  Callback Function
     * @returns {TRequest|any}
     */
    addNetwork(_uuid: string, _network_uuid: string, _additionalOptions?: Object, _callback?: Function): Promise<ApiResult<VoidApiResult>>;
    /**
     * Remove Storage from Server
     *
     *
     * @param _uuid Server UUID
     * @param _network_uuid Network UUID
     * @param _callback
     * @returns {any|void|PromiseLike<void>}
     */
    removeNetwork(_uuid: string, _network_uuid: string, _callback?: Function): Promise<ApiResult<VoidApiResult>>;
}
export { Server };
