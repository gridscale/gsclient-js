import { APIClass } from '../api';
import { RequestOptions } from './GridscaleObjects';
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
    _deleted(_key: string, _options?: RequestOptions, _callback?: Function): Promise<import("../api").ApiResult<any>>;
    ips(_options?: RequestOptions, _callback?: Function): Promise<import("../api").ApiResult<any>>;
    isoimages(_options?: RequestOptions, _callback?: Function): Promise<import("../api").ApiResult<any>>;
    networks(_options?: RequestOptions, _callback?: Function): Promise<import("../api").ApiResult<any>>;
    servers(_options?: RequestOptions, _callback?: Function): Promise<import("../api").ApiResult<any>>;
    snapshots(_options?: RequestOptions, _callback?: Function): Promise<import("../api").ApiResult<any>>;
    storages(_options?: RequestOptions, _callback?: Function): Promise<import("../api").ApiResult<any>>;
    templates(_options?: RequestOptions, _callback?: Function): Promise<import("../api").ApiResult<any>>;
    paasServices(_options?: RequestOptions, _callback?: Function): Promise<import("../api").ApiResult<any>>;
}
export { Deleted };
