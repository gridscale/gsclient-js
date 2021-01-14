

import {GridscaleObjects} from './GridscaleObjects';
import { APIClass, RequestOptions, ApiResult, VoidApiResult } from '../api';
import * as models from './../Specs/index';
import { FirewallCreate, FirewallUpdate } from './../Specs/index';

interface Firewall {
    list(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.FirewallsGetResponse>>;
    get(_uuid: string, _callback?: Function): Promise<ApiResult<models.FirewallGetResponse>>;
    create(_attributes: FirewallCreate, _callback?: Function): Promise<ApiResult<models.CreateResponse>>;
    patch(_uuid: string, _attributes: FirewallUpdate, _callback?: Function): Promise<ApiResult<VoidApiResult>>;
}

class Firewall extends GridscaleObjects {

    constructor(_api: APIClass) { super(_api, '/objects/firewalls'); }
}


export { Firewall };
