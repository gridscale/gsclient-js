

import { GridscaleObjects } from './GridscaleObjects';
import { APIClass, ApiResult, GSError, GenericApiResult, RequestOptions } from '../api';


class IP extends GridscaleObjects {

    constructor(_api: APIClass) { super(_api, '/objects/ips'); }


    /**
     * List Objects
     *
     *
     * @param _options
     * @param _callback
     * @returns {any}
     */
    list(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<GenericApiResult>> {
        return this._api.get( this._basepath , _options, _callback);
    }

}

export {IP};

