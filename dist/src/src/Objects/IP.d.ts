import { GridscaleObjects } from './GridscaleObjects';
import { APIClass, ApiResult, RequestOptions } from '../api';
import * as models from './model/models';
interface IP {
    list(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.IpsGetResponse>>;
    get(_uuid: string, _callback?: Function): Promise<ApiResult<models.IpGetResponse>>;
    create(_attributes: Object, _callback?: Function): Promise<ApiResult<models.IpCreateResponse>>;
}
declare class IP extends GridscaleObjects {
    constructor(_api: APIClass);
}
export { IP };
