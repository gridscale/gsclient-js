import { GridscaleObjects } from './GridscaleObjects';
import { APIClass, ApiResult, RequestOptions } from '../api';
import * as models from './../Specs/index';
interface PaasServiceTemplate {
    list(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.PaasServiceTemplatesGetResponse>>;
}
declare class PaasServiceTemplate extends GridscaleObjects {
    constructor(_api: APIClass);
}
export { PaasServiceTemplate };
