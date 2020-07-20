

import { GridscaleObjects } from './GridscaleObjects';
import { APIClass, ApiResult, GSError, GenericApiResult, RequestOptions } from '../api';
import * as models from './model/models';


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
    list(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.IpsGetResponse>> {
        return this._pipe_result(
            this._api.get( this._basepath , _options, _callback),
            'ips'
        );

    }

    // override some generic function to set explicit return type
    
    get(_uuid: string, _callback?: Function): Promise<ApiResult<models.IpGetResponse>> {
        return super._pipe_result(
            super.get(_uuid, _callback),
            'ip'
        );
    }
    create(_attributes: Object, _callback?: Function): Promise<ApiResult<models.IpCreateResponse>> {
        return super.create(_attributes, _callback);
    }

}

export {IP};

