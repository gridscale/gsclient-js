import { GridscaleObjects } from './GridscaleObjects';
import { APIClass, RequestOptions, ApiResult } from '../api';
import * as models from './model/models';
interface Label {
    list(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.LabelsGetResponse>>;
    get(_uuid: string, _callback?: Function): Promise<ApiResult<models.LabelGetResponse>>;
}
declare class Label extends GridscaleObjects {
    constructor(_api: APIClass);
}
export { Label };
