import { GridscaleObjects } from './GridscaleObjects';
import { APIClass, RequestOptions, ApiResult } from '../api';
import * as models from './model/models';
interface ISOImage {
    list(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.IsoimagesGetResponse>>;
    get(_uuid: string, _callback?: Function): Promise<ApiResult<models.IsoimageGetResponse>>;
    create(_attributes: Object, _callback?: Function): Promise<ApiResult<models.CreateResponse>>;
}
declare class ISOImage extends GridscaleObjects {
    constructor(_api: APIClass);
}
export { ISOImage };
