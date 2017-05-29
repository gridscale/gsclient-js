

import {GridscaleObjects} from './GridscaleObjects';


class Price extends GridscaleObjects {

    constructor(_api) { super(_api,'/objects/ips'); }


    /**
     * List Objects
     *
     *
     * @param _options
     * @param _callback
     * @returns {any}
     */
    list(_callback?){
        return this._api.get( this._basepath ,_callback);
    }

}

export {Price}
