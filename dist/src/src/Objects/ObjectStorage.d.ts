import { APIClass, ApiResult, GenericApiResult } from '../api';
import { RequestOptions } from './GridscaleObjects';
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
     * @returns {any}
     */
    accessKeys(_options: RequestOptions, _callback?: Function): Promise<ApiResult<GenericApiResult>>;
    /**
     * Get Single Object by UUID
     *
     * @param _uuid
     * @param _callback
     */
    accessKey(_access_key: string, _callback?: Function): Promise<ApiResult<GenericApiResult>>;
    /**
     * Remove Access Key
     *
     * @param _uuid
     * @param _callback
     */
    removeAccessKey(_access_key: string, _callback?: Function): Promise<ApiResult<GenericApiResult>>;
    /**
     * Creates new Access Key
     *
     * @param _callback
     * @returns {any|TRequest|LineCollection}
     */
    createAccessKey(_callback?: Function): Promise<ApiResult<GenericApiResult>>;
    /**
     * List Access Keys
     *
     *
     * @param _options
     * @param _callback
     * @returns {any}
     *
     * @deprecated
     */
    buckets(_options: RequestOptions, _callback?: Function): Promise<ApiResult<GenericApiResult>>;
    /**
     * Get Single Object by UUID
     *
     * @param _uuid
     * @param _callback
     *
     * @deprecated
     */
    bucket(_bucket_name: string, _callback?: Function): Promise<ApiResult<GenericApiResult>>;
}
export { ObjectStorage };
