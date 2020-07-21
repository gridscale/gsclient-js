import { APIClass, ApiResult, RequestOptions, VoidApiResult } from '../api';
import * as models from './model/models';

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
    accessKeys(_options: RequestOptions, _callback?: Function): Promise<ApiResult<models.AccessKeysGetResponse>> {

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
    removeAccessKey(_access_key: string, _callback?: Function): Promise<ApiResult<VoidApiResult>> {
        return this._api.remove( '/objects/objectstorages/access_keys/' + _access_key, _callback);
    }


    /**
     * Creates new Access Key
     *
     * @param _callback
     * @returns {Promise<ApiResult<models.AccessKeyCreateResponse>>}
     */
    createAccessKey(_callback?: Function): Promise<ApiResult<models.AccessKeyCreateResponse>> {
        return this._api.post( '/objects/objectstorages/access_keys'  , _callback);
    }



    

}

export { ObjectStorage };
