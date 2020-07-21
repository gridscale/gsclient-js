

import { GridscaleObjects } from './GridscaleObjects';
import { APIClass, ApiResult, GSError, GenericApiResult, RequestOptions } from '../api';
import * as models from './model/models';

interface IP {
    list(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.IpsGetResponse>>;
    get(_uuid: string, _callback?: Function): Promise<ApiResult<models.IpGetResponse>>;
    create(_attributes: Object, _callback?: Function): Promise<ApiResult<models.IpCreateResponse>>;
}

class IP extends GridscaleObjects {

    constructor(_api: APIClass) { super(_api, '/objects/ips'); }



}

export {IP};

