import { GridscaleObjects } from './GridscaleObjects';
import { APIClass, RequestOptions, ApiResult, VoidApiResult } from '../api';
import * as models from './../Specs/index';
import { PaasSecurityZoneCreate, PaasSecurityZoneUpdate } from './../Specs/index';
interface PaasSecurityZone {
    list(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.PaasSecurityZonesGetResponse>>;
    get(_uuid: string, _callback?: Function): Promise<ApiResult<models.PaasSecurityZoneGetResponse>>;
    create(_attributes: PaasSecurityZoneCreate, _callback?: Function): Promise<ApiResult<models.PaasSecurityZoneCreateResponse>>;
    patch(_uuid: string, _attributes: PaasSecurityZoneUpdate, _callback?: Function): Promise<ApiResult<VoidApiResult>>;
}
declare class PaasSecurityZone extends GridscaleObjects {
    constructor(_api: APIClass);
}
export { PaasSecurityZone };