

import {GridscaleObjects} from './GridscaleObjects';
import { APIClass, RequestOptions, ApiResult } from '../api';
import * as models from './model/models';


class PAASSecurityZone extends GridscaleObjects {

    constructor(_api: APIClass) { super(_api, '/objects/paas/security_zones'); }
    
    // override some generic function to set explicit return type
    list(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.PaasSecurityZonesGetResponse>> {
        return super._pipe_result(
            super.list(_options, _callback),
            'paas_security_zones'
        );
    }
    get(_uuid: string, _callback?: Function): Promise<ApiResult<models.PaasSecurityZoneGetResponse>> {
        return super._pipe_result(
            super.get(_uuid, _callback),
            'paas_security_zone'
        );
    }
    create(_attributes: Object, _callback?: Function): Promise<ApiResult<models.PaasSecurityZoneCreateResponse>> {
        return super.create(_attributes, _callback);
    }

}


export { PAASSecurityZone };
