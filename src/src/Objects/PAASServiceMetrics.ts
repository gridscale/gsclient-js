

import {GridscaleObjects} from './GridscaleObjects';
import { APIClass, RequestOptions, ApiResult } from '../api';
import * as models from './model/models';


class PAASServiceMetrics extends GridscaleObjects {

    constructor(_api: APIClass, _serviceUUID: string) {
        super(_api, '/objects/paas/services/' + _serviceUUID + '/metrics');

        this._defaults = {};
    }

    // override some generic function to set explicit return type
    list(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.PaasServiceMetricsGetResponse>> {
        return super._pipe_result(
            super.list(_options, _callback),
            'paas_service_metrics'
        );
    }
   

}


export { PAASServiceMetrics };
