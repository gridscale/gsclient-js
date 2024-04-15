

import { GridscaleObjects } from './GridscaleObjects';
import { APIClass, RequestOptions, ApiResult, VoidApiResult, GenericApiResult } from '../api';
import * as models from '../Specs';

interface GPU {
    list(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.GPUsGetResponse>>;
    get(_uuid: string, _callback?: Function): Promise<ApiResult<models.GPUGetResponse>>;
    create(_attributes: models.GPUCreateBody, _callback?: Function): Promise<ApiResult<models.GPUCreateResponse>>;
    patch(_uuid: string, _attributes: models.GPUUpdateBody, _callback?: Function): Promise<ApiResult<VoidApiResult>>;
    remove(_uuid: string, _callback?: Function): Promise<ApiResult<VoidApiResult>>;
}

class GPU extends GridscaleObjects {

    constructor(_api: APIClass) { super(_api, '/objects/gpus'); }

    listFlavors(_options?: RequestOptions, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void) {
        // Get Defaults
        const requestOptions = this._buildRequestOptions(_options);

        // Set Callback
        if (typeof _options === 'function' && _callback === undefined) {
            _callback = _options;
        }

        return this._api.get('/objects/gpu_flavors', { ...requestOptions, limit: 100 }, _callback);
    }

}


export { GPU };
