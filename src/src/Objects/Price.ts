

import {GridscaleObjects, RequestOptions} from './GridscaleObjects';
import { APIClass, ApiResult, GSError, GenericApiResult } from '../api';


class Price extends GridscaleObjects {

    constructor(_api: APIClass) { super(_api, '/prices'); }

    /**
     * List Objects
     *
     *
     * @param _options
     * @param _callback
     * @returns {any}
     */
    list(_options: RequestOptions, _callback?: Function): Promise<ApiResult<GenericApiResult>> {
        return this._api.get(this._basepath, _options, _callback);
    }

}

export {Price};
