import { GridscaleObjects, RequestOptions } from './GridscaleObjects';
import { APIClass, ApiResult, GenericApiResult } from '../api';
declare class IP extends GridscaleObjects {
    constructor(_api: APIClass);
    /**
     * List Objects
     *
     *
     * @param _options
     * @param _callback
     * @returns {any}
     */
    list(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<GenericApiResult>>;
}
export { IP };
