import { GridscaleObjects } from './GridscaleObjects';
import { APIClass, RequestOptions, ApiResult, VoidApiResult } from '../api';
import * as models from './model/models';
import { LoadbalancerCreate, LoadbalancerUpdate } from './model/models';
interface Loadbalancer {
    list(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.LoadbalancersGetResponse>>;
    get(_uuid: string, _callback?: Function): Promise<ApiResult<models.LoadbalancerGetResponse>>;
    create(_attributes: LoadbalancerCreate, _callback?: Function): Promise<ApiResult<models.CreateResponse>>;
    patch(_uuid: string, _attributes: LoadbalancerUpdate, _callback?: Function): Promise<ApiResult<VoidApiResult>>;
}
declare class Loadbalancer extends GridscaleObjects {
    constructor(_api: APIClass);
}
export { Loadbalancer };