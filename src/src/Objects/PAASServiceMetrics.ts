

import {GridscaleObjects} from './GridscaleObjects';
import { APIClass, RequestOptions, ApiResult } from '../api';
import * as models from './model/models';

interface PAASServiceMetrics {
    list(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.PaasServiceMetricsGetResponse>>;
}

class PAASServiceMetrics extends GridscaleObjects {

    constructor(_api: APIClass, _serviceUUID: string) {
        super(_api, '/objects/paas/services/' + _serviceUUID + '/metrics');

        this._defaults = {};
    }


}


export { PAASServiceMetrics };
