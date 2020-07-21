

import {GridscaleObjects} from './GridscaleObjects';
import { APIClass, RequestOptions, ApiResult } from '../api';
import * as models from './model/models';
import { StorageTemplateCreate } from './model/models';

interface Template {
    list(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.StorageTemplatesGetResponse>>;
    get(_uuid: string, _callback?: Function): Promise<ApiResult<models.TemplateGetResponse>>;
    create(_attributes: StorageTemplateCreate, _callback?: Function): Promise<ApiResult<models.CreateResponse>>;
}

class Template extends GridscaleObjects {

    constructor(_api: APIClass) { super(_api, '/objects/templates'); }

}


export { Template };


