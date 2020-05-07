

import {GridscaleObjects} from './GridscaleObjects';
import { APIClass } from '../api';


class PAASServiceMetrics extends GridscaleObjects {

    constructor(_api: APIClass, _serviceUUID: string) {
        super(_api, '/objects/paas/services/' + _serviceUUID + '/metrics');

        this._defaults = {};
    }

}


export { PAASServiceMetrics };
