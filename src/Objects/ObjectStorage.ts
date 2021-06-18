import { APIClass, ApiResult, GenericApiResult, RequestOptions, VoidApiResult } from '../api';
import * as models from './../Specs';

class ObjectStorage {

    // Naming
    public _api: APIClass;


    /**
     * Create Object Endpoint
     *
     *
     * @param _api API Class Instance
     * @param _path Path to the Object
     */
    constructor(_api: APIClass) {
        this._api = _api;
    }


    /**
     * List Access Keys
     *
     *
     * @param _options
     * @param _callback
     * @returns {Promise<ApiResult<models.AccessKeysGetResponse>>}
     */
    accessKeys(_options: RequestOptions, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<models.AccessKeysGetResponse>> {

        return this._api.get( '/objects/objectstorages/access_keys', _options, _callback);

    }



    /**
     * Get Single Object by UUID
     *
     * @param _uuid
     * @param _callback
     */
    accessKey(_access_key: string, _callback?: Function): Promise<ApiResult<models.AccessKeyGetResponse>> {
        return this._api.get( '/objects/objectstorages/access_keys/' + _access_key, _callback);
    }

    /**
     * Remove Access Key
     *
     * @param _uuid
     * @param _callback
     */
    removeAccessKey(_access_key: string, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<VoidApiResult>> {
        return this._api.remove( '/objects/objectstorages/access_keys/' + _access_key, _callback);
    }


    /**
     * Creates new Access Key
     *
     * @param _options
     * @param _callback
     * @returns {Promise<ApiResult<models.AccessKeyCreateResponse>>}
     */
    createAccessKey(_attributes: models.AccessKeyCreate, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<models.AccessKeyCreateResponse>> {
        return this._api.post( '/objects/objectstorages/access_keys', _attributes, _callback);
    }

    /**
     * List Buckets
     *
     *
     * @param _options
     * @param _callback
     * @returns {Promise<ApiResult<models.AccessKeysGetResponse>>}
     */
    buckets(_options: RequestOptions, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<models.BucketsGetResponse>> {
        return this._api.get( '/objects/objectstorages/buckets', _options, _callback);
    }
}

export { ObjectStorage };
