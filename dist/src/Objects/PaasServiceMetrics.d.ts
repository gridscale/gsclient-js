import { GridscaleObjects } from './GridscaleObjects';
import { APIClass, RequestOptions, ApiResult } from '../api';
import * as models from './../Specs/index';
interface PaasServiceMetrics {
    list(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.PaasServiceMetricsGetResponse>>;
}
declare class PaasServiceMetrics extends GridscaleObjects {
    constructor(_api: APIClass, _serviceUUID: string);
}
export { PaasServiceMetrics };
