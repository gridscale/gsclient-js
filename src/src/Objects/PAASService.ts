

import {GridscaleObjects} from './GridscaleObjects';
import { APIClass, ApiResult, GSError } from '../api';
import { SrvRecord } from 'dns';


class PAASService extends GridscaleObjects {

    constructor(_api: APIClass) { super(_api, '/objects/paas/services'); }

    renewCredentials(_serviceUUID: string): Promise<ApiResult> {
        return this._api.patch(this._basepath + '/' + _serviceUUID + '/renew_credentials', {});
    }
}


export { PAASService };
