import {GridscaleObjects} from './GridscaleObjects';
import { APIClass, RequestOptions, ApiResult } from '../api';
import * as models from './model/models';


class Label extends GridscaleObjects {

    constructor(_api: APIClass) { super(_api, '/objects/labels'); }
    // override some generic function to set explicit return type
    list(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.LabelsGetResponse>> {
        return super._pipe_result(
            super.list(_options, _callback),
            'labels'
        );
    }
    get(_uuid: string, _callback?: Function): Promise<ApiResult<models.LabelGetResponse>> {
        return super._pipe_result(
            super.get(_uuid, _callback),
            'label'
        );
    }


}


export { Label };
