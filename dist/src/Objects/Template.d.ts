import { GridscaleObjects } from './GridscaleObjects';
import { APIClass, RequestOptions, ApiResult } from '../api';
import * as models from './../Specs';
import { StorageTemplateCreate } from './../Specs';
interface Template {
    list(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.StorageTemplatesGetResponse>>;
    get(_uuid: string, _callback?: Function): Promise<ApiResult<models.TemplateGetResponse>>;
    create(_attributes: StorageTemplateCreate, _callback?: Function): Promise<ApiResult<models.CreateResponse>>;
}
declare class Template extends GridscaleObjects {
    constructor(_api: APIClass);
}
export { Template };
