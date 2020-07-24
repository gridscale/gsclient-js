

import {GridscaleObjects} from './GridscaleObjects';
import { APIClass, ApiResult, RequestOptions, VoidApiResult } from '../api';
import * as models from './model/models';
import { PaasServiceCreate, PaasServiceUpdate } from './model/models';
import { PaasServiceMetrics } from './PaasServiceMetrics';

interface PaasService {
    list(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.PaasServicesGetResponse>>;
    get(_uuid: string, _callback?: Function): Promise<ApiResult<models.PaasServiceGetResponse>>;
    create(_attributes: PaasServiceCreate, _callback?: Function): Promise<ApiResult<models.PaasServiceCreateResponse>>;
    patch(_uuid: string, _attributes: PaasServiceUpdate, _callback?: Function): Promise<ApiResult<VoidApiResult>>;
}

class PaasService extends GridscaleObjects {
    api: APIClass;

    constructor(_api: APIClass) { 
        super(_api, '/objects/paas/services');

        this.api = _api;
    }

    listMetrics(_uuid, _callback) {
        return new PaasServiceMetrics(this._api, _uuid).list({}, _callback);
    }

    renewCredentials(_serviceUUID: string): Promise<ApiResult<VoidApiResult>> {
        return this._api.patch(this._basepath + '/' + _serviceUUID + '/renew_credentials', {});
    }
}


export { PaasService };
