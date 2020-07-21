

import {GridscaleObjects} from './GridscaleObjects';
import { APIClass, RequestOptions, ApiResult } from '../api';
import * as models from './model/models';

interface Firewall {
    list(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.FirewallsGetResponse>>;
    get(_uuid: string, _callback?: Function): Promise<ApiResult<models.FirewallGetResponse>>;
    create(_attributes: Object, _callback?: Function): Promise<ApiResult<models.CreateResponse>>;
}

class Firewall extends GridscaleObjects {

    constructor(_api: APIClass) { super(_api, '/objects/firewalls'); }
}


export { Firewall };
