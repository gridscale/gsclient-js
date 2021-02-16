

import {GridscaleObjects} from './GridscaleObjects';
import { APIClass, RequestOptions, ApiResult, GenericApiResult, VoidApiResult } from '../api';
import * as models from './../Specs';
import { StorageTemplateCreate } from './../Specs';

interface Template {
    list(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.StorageTemplatesGetResponse>>;
    get(_uuid: string, _callback?: Function): Promise<ApiResult<models.TemplateGetResponse>>;
    create(_attributes: StorageTemplateCreate, _callback?: Function): Promise<ApiResult<models.CreateResponse>>;
    patch(_uuid: string, _attributes: { name: string }, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<VoidApiResult>>
}

class Template extends GridscaleObjects {

    constructor(_api: APIClass) { super(_api, '/objects/templates'); }

}


export { Template };


