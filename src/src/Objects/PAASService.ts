

import {GridscaleObjects} from './GridscaleObjects';
import { APIClass, ApiResult, GenericApiResult, RequestOptions, VoidApiResult } from '../api';
import * as models from './model/models';

interface PAASService {
    list(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.PaasServicesGetResponse>>;
    get(_uuid: string, _callback?: Function): Promise<ApiResult<models.PaasServiceGetResponse>>;
    create(_attributes: Object, _callback?: Function): Promise<ApiResult<models.PaasServiceCreateResponse>>
}

class PAASService extends GridscaleObjects {

    constructor(_api: APIClass) { super(_api, '/objects/paas/services'); }
    

    renewCredentials(_serviceUUID: string): Promise<ApiResult<VoidApiResult>> {
        return this._api.patch(this._basepath + '/' + _serviceUUID + '/renew_credentials', {});
    }
}


export { PAASService };
