import { GridscaleObjects } from './GridscaleObjects';
import { APIClass, ApiResult, RequestOptions, VoidApiResult } from '../api';
import * as models from './../Specs/index';
import { IpCreate, IpUpdate } from './../Specs/index';
interface IP {
    list(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.IpsGetResponse>>;
    get(_uuid: string, _callback?: Function): Promise<ApiResult<models.IpGetResponse>>;
    create(_attributes: IpCreate, _callback?: Function): Promise<ApiResult<models.IpCreateResponse>>;
    patch(_uuid: string, _attributes: IpUpdate, _callback?: Function): Promise<ApiResult<VoidApiResult>>;
}
declare class IP extends GridscaleObjects {
    constructor(_api: APIClass);
}
export { IP };
