

import {GridscaleObjects} from './GridscaleObjects';
import { APIClass, RequestOptions, ApiResult, VoidApiResult } from '../api';
import * as models from './../Specs';
import { NetworkCreate, NetworkUpdate } from './../Specs';

interface Network {
    list(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.NetworksGetResponse>>;
    get(_uuid: string, _callback?: Function): Promise<ApiResult<models.NetworkGetResponse>>;
    create(_attributes: NetworkCreate, _callback?: Function): Promise<ApiResult<models.CreateResponse>>;
    patch(_uuid: string, _attributes: NetworkUpdate, _callback?: Function): Promise<ApiResult<VoidApiResult>>;
}

class Network extends GridscaleObjects {

    constructor(_api: APIClass) { super(_api, '/objects/networks'); }
}


export { Network };
