

import {GridscaleObjects} from './GridscaleObjects';
import { APIClass, ApiResult, GenericApiResult, RequestOptions, VoidApiResult } from '../api';
import * as models from './model/models';


class PAASService extends GridscaleObjects {

    constructor(_api: APIClass) { super(_api, '/objects/paas/services'); }
    
    // override some generic function to set explicit return type
    list(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.PaasServicesGetResponse>> {
        return super._pipe_result(
            super.list(_options, _callback),
            'paas_services'
        );
    }
    get(_uuid: string, _callback?: Function): Promise<ApiResult<models.PaasServiceGetResponse>> {
        return super._pipe_result(
            super.get(_uuid, _callback),
            'paas_services'
        );
    }
    create(_attributes: Object, _callback?: Function): Promise<ApiResult<models.PaasServiceCreateResponse>> {
        return super.create(_attributes, _callback);
    }

    renewCredentials(_serviceUUID: string): Promise<ApiResult<VoidApiResult>> {
        return this._api.patch(this._basepath + '/' + _serviceUUID + '/renew_credentials', {});
    }
}


export { PAASService };
