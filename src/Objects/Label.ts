import {GridscaleObjects} from './GridscaleObjects';
import { APIClass, RequestOptions, ApiResult } from '../api';
import * as models from './../Specs';

interface Label {
    list(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.LabelsGetResponse>>;
    get(_label: string, _callback?: Function): Promise<ApiResult<models.LabelGetResponse>>;
}
class Label extends GridscaleObjects {

    constructor(_api: APIClass) { super(_api, '/objects/labels'); }


}


export { Label };
