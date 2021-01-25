

import {GridscaleObjects} from './GridscaleObjects';
import { APIClass, RequestOptions, ApiResult, VoidApiResult } from '../api';
import * as models from './../Specs';
import { LoadbalancerCreate, LoadbalancerUpdate } from './../Specs';

interface Loadbalancer {
    list(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.LoadbalancersGetResponse>>;
    get(_uuid: string, _callback?: Function): Promise<ApiResult<models.LoadbalancerGetResponse>>;
    create(_attributes: LoadbalancerCreate, _callback?: Function): Promise<ApiResult<models.CreateResponse>>;
    patch(_uuid: string, _attributes: LoadbalancerUpdate, _callback?: Function): Promise<ApiResult<VoidApiResult>>;
}

class Loadbalancer extends GridscaleObjects {

    constructor(_api: APIClass) { super(_api, '/objects/loadbalancers'); }

}

export { Loadbalancer };
