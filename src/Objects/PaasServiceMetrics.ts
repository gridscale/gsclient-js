

import {GridscaleObjects} from './GridscaleObjects';
import { APIClass, RequestOptions, ApiResult } from '../api';
import * as models from './../Specs/index';

interface PaasServiceMetrics {
    list(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.PaasServiceMetricsGetResponse>>;
}

class PaasServiceMetrics extends GridscaleObjects {

    constructor(_api: APIClass, _serviceUUID: string) {
        super(_api, '/objects/paas/services/' + _serviceUUID + '/metrics');

        this._defaults = {};
    }


}


export { PaasServiceMetrics };
