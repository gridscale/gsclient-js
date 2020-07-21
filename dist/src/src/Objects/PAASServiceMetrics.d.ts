import { GridscaleObjects } from './GridscaleObjects';
import { APIClass, RequestOptions, ApiResult } from '../api';
import * as models from './model/models';
interface PAASServiceMetrics {
    list(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.PaasServiceMetricsGetResponse>>;
}
declare class PAASServiceMetrics extends GridscaleObjects {
    constructor(_api: APIClass, _serviceUUID: string);
}
export { PAASServiceMetrics };
