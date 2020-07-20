

import {GridscaleObjects} from './GridscaleObjects';
import { APIClass, RequestOptions, ApiResult } from '../api';
import * as models from './model/models';


class Template extends GridscaleObjects {

    constructor(_api: APIClass) { super(_api, '/objects/templates'); }
    
    // override some generic function to set explicit return type
    list(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.StorageTemplatesGetResponse>> {
        return super._pipe_result(
            super.list(_options, _callback),
            'templates'
        );
    }
    get(_uuid: string, _callback?: Function): Promise<ApiResult<models.TemplateGetResponse>> {
        return super._pipe_result(
            super.get(_uuid, _callback),
            'template'
        );
    }
    create(_attributes: Object, _callback?: Function): Promise<ApiResult<models.CreateResponse>> {
        return super.create(_attributes, _callback);
    }
}


export { Template };


