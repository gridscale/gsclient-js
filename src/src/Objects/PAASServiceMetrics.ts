

import {GridscaleObjects} from './GridscaleObjects';


class PAASServiceMetrics extends GridscaleObjects {

    constructor(_api, _serviceUUID: string) { 
        super(_api,'/objects/paas/services/' + _serviceUUID + '/metrics'); 
    
        this._defaults = {};
    }

}


export { PAASServiceMetrics }
