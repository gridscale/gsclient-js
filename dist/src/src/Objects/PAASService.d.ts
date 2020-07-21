import { GridscaleObjects } from './GridscaleObjects';
import { APIClass, ApiResult, RequestOptions, VoidApiResult } from '../api';
import * as models from './model/models';
import { PaasServiceCreate, PaasServiceUpdate } from './model/models';
interface PAASService {
    list(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.PaasServicesGetResponse>>;
    get(_uuid: string, _callback?: Function): Promise<ApiResult<models.PaasServiceGetResponse>>;
    create(_attributes: PaasServiceCreate, _callback?: Function): Promise<ApiResult<models.PaasServiceCreateResponse>>;
    patch(_uuid: string, _attributes: PaasServiceUpdate, _callback?: Function): Promise<ApiResult<VoidApiResult>>;
}
declare class PAASService extends GridscaleObjects {
    api: APIClass;
    constructor(_api: APIClass);
    listMetrics(_uuid: any, _callback: any): Promise<ApiResult<models.PaasServiceMetricsGetResponse>>;
    renewCredentials(_serviceUUID: string): Promise<ApiResult<VoidApiResult>>;
}
export { PAASService };
