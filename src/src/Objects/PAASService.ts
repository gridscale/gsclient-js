

import {GridscaleObjects} from './GridscaleObjects';


class PAASService extends GridscaleObjects {

    constructor(_api) { super(_api,'/objects/paas/services'); }

    renewCredentials(_serviceUUID) {
        return this._api.patch(this._basepath + '/' + _serviceUUID + '/renew_credentials', {});
    }
}


export { PAASService }
