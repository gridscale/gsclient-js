

import {GridscaleObjects} from './GridscaleObjects';
import { APIClass, RequestOptions, ApiResult } from '../api';
import * as models from './model/models';

interface PAASSecurityZone {
    list(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.PaasSecurityZonesGetResponse>>;
    get(_uuid: string, _callback?: Function): Promise<ApiResult<models.PaasSecurityZoneGetResponse>>;
    create(_attributes: Object, _callback?: Function): Promise<ApiResult<models.PaasSecurityZoneCreateResponse>>
}

class PAASSecurityZone extends GridscaleObjects {

    constructor(_api: APIClass) { super(_api, '/objects/paas/security_zones'); }

}


export { PAASSecurityZone };
