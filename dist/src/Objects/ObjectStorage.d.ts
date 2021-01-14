import { APIClass, ApiResult, RequestOptions, VoidApiResult } from '../api';
import * as models from './../Specs/index';
declare class ObjectStorage {
    _api: APIClass;
    /**
     * Create Object Endpoint
     *
     *
     * @param _api API Class Instance
     * @param _path Path to the Object
     */
    constructor(_api: APIClass);
    /**
     * List Access Keys
     *
     *
     * @param _options
     * @param _callback
     * @returns {Promise<ApiResult<models.AccessKeysGetResponse>>}
     */
    accessKeys(_options: RequestOptions, _callback?: Function): Promise<ApiResult<models.AccessKeysGetResponse>>;
    /**
     * Get Single Object by UUID
     *
     * @param _uuid
     * @param _callback
     */
    accessKey(_access_key: string, _callback?: Function): Promise<ApiResult<models.AccessKeyGetResponse>>;
    /**
     * Remove Access Key
     *
     * @param _uuid
     * @param _callback
     */
    removeAccessKey(_access_key: string, _callback?: Function): Promise<ApiResult<VoidApiResult>>;
    /**
     * Creates new Access Key
     *
     * @param _callback
     * @returns {Promise<ApiResult<models.AccessKeyCreateResponse>>}
     */
    createAccessKey(_callback?: Function): Promise<ApiResult<models.AccessKeyCreateResponse>>;
}
export { ObjectStorage };
