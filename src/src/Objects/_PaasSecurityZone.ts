

import {GridscaleObjects} from './GridscaleObjects';
import { APIClass, RequestOptions, ApiResult, VoidApiResult } from '../api';
import * as models from './model/models';
import { PaasSecurityZoneCreate, PaasSecurityZoneUpdate } from './model/models';

interface PaasSecurityZone {
    list(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.PaasSecurityZonesGetResponse>>;
    get(_uuid: string, _callback?: Function): Promise<ApiResult<models.PaasSecurityZoneGetResponse>>;
    create(_attributes: PaasSecurityZoneCreate, _callback?: Function): Promise<ApiResult<models.PaasSecurityZoneCreateResponse>>;
    patch(_uuid: string, _attributes: PaasSecurityZoneUpdate, _callback?: Function): Promise<ApiResult<VoidApiResult>>;
}

class PaasSecurityZone extends GridscaleObjects {

    constructor(_api: APIClass) { super(_api, '/objects/paas/security_zones'); }

}


export { PaasSecurityZone };
