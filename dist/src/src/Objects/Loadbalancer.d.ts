import { GridscaleObjects } from './GridscaleObjects';
import { APIClass, RequestOptions, ApiResult } from '../api';
import * as models from './model/models';
interface Loadbalancer {
    list(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.LoadbalancersGetResponse>>;
    get(_uuid: string, _callback?: Function): Promise<ApiResult<models.LoadbalancerGetResponse>>;
    create(_attributes: Object, _callback?: Function): Promise<ApiResult<models.CreateResponse>>;
}
declare class Loadbalancer extends GridscaleObjects {
    constructor(_api: APIClass);
}
export { Loadbalancer };
