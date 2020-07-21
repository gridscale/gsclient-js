import { GridscaleObjects } from './GridscaleObjects';
import { APIClass, RequestOptions, ApiResult } from '../api';
import * as models from './model/models';
interface Firewall {
    list(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.FirewallsGetResponse>>;
    get(_uuid: string, _callback?: Function): Promise<ApiResult<models.FirewallGetResponse>>;
    create(_attributes: Object, _callback?: Function): Promise<ApiResult<models.CreateResponse>>;
}
declare class Firewall extends GridscaleObjects {
    constructor(_api: APIClass);
}
export { Firewall };
