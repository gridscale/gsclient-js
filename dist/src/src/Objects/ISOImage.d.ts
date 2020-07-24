import { GridscaleObjects } from './GridscaleObjects';
import { APIClass, RequestOptions, ApiResult, VoidApiResult } from '../api';
import * as models from './model/models';
import { IsoimageCreate, IsoimageUpdate } from './model/models';
interface ISOImage {
    list(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.IsoimagesGetResponse>>;
    get(_uuid: string, _callback?: Function): Promise<ApiResult<models.IsoimageGetResponse>>;
    create(_attributes: IsoimageCreate, _callback?: Function): Promise<ApiResult<models.CreateResponse>>;
    patch(_uuid: string, _attributes: IsoimageUpdate, _callback?: Function): Promise<ApiResult<VoidApiResult>>;
}
declare class ISOImage extends GridscaleObjects {
    constructor(_api: APIClass);
}
export { ISOImage };
