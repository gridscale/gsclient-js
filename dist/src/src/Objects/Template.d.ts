import { GridscaleObjects } from './GridscaleObjects';
import { APIClass, RequestOptions, ApiResult } from '../api';
import * as models from './model/models';
interface Template {
    list(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.StorageTemplatesGetResponse>>;
    get(_uuid: string, _callback?: Function): Promise<ApiResult<models.TemplateGetResponse>>;
    create(_attributes: Object, _callback?: Function): Promise<ApiResult<models.CreateResponse>>;
}
declare class Template extends GridscaleObjects {
    constructor(_api: APIClass);
}
export { Template };
