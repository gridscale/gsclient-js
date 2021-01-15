import { APIClass, RequestOptions, ApiResult, GenericApiResult } from '../api';
import * as models from './../Specs';
declare class Deleted {
    _api: APIClass;
    _defaults: RequestOptions;
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
    _buildRequestOptions(_options?: RequestOptions): RequestOptions;
    _deleted(_key: string, _options?: RequestOptions, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<GenericApiResult>>;
    ips(_options?: RequestOptions, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<models.DeletedIpsGetResponse>>;
    isoimages(_options?: RequestOptions, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<models.DeletedIsoimagesGetResponse>>;
    networks(_options?: RequestOptions, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<models.DeletedNetworksGetResponse>>;
    servers(_options?: RequestOptions, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<models.DeletedServersGetResponse>>;
    snapshots(_options?: RequestOptions, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<models.DeletedSnapshotsGetResponse>>;
    storages(_options?: RequestOptions, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<models.DeletedStoragesGetResponse>>;
    templates(_options?: RequestOptions, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<models.DeletedTemplatesGetResponse>>;
    loadbalancers(_options?: RequestOptions, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<models.DeletedLoadbalancersGetResponse>>;
    paasServices(_options?: RequestOptions, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<models.DeletedPaasServicesGetResponse>>;
}
export { Deleted };
