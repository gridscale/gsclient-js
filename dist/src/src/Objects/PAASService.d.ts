import { GridscaleObjects } from './GridscaleObjects';
import { APIClass, ApiResult, RequestOptions, VoidApiResult } from '../api';
import * as models from './model/models';
interface PAASService {
    list(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.PaasServicesGetResponse>>;
    get(_uuid: string, _callback?: Function): Promise<ApiResult<models.PaasServiceGetResponse>>;
    create(_attributes: Object, _callback?: Function): Promise<ApiResult<models.PaasServiceCreateResponse>>;
}
declare class PAASService extends GridscaleObjects {
    constructor(_api: APIClass);
    renewCredentials(_serviceUUID: string): Promise<ApiResult<VoidApiResult>>;
}
export { PAASService };
