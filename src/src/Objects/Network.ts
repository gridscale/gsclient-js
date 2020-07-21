

import {GridscaleObjects} from './GridscaleObjects';
import { APIClass, RequestOptions, ApiResult } from '../api';
import * as models from './model/models';

interface Network {
    list(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.NetworksGetResponse>>;
    get(_uuid: string, _callback?: Function): Promise<ApiResult<models.NetworkGetResponse>>;
    create(_attributes: Object, _callback?: Function): Promise<ApiResult<models.CreateResponse>>;
}

class Network extends GridscaleObjects {

    constructor(_api: APIClass) { super(_api, '/objects/networks'); }
}


export { Network };
