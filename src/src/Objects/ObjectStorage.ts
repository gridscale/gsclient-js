import { APIClass, ApiResult, GSError, GenericApiResult, RequestOptions, VoidApiResult } from '../api';
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

    _pipe_result<T>(_originalPromise: Promise<ApiResult<T>>, _key: string): Promise<ApiResult<T>> {
        return new Promise((_resolve, _reject) => {
            _originalPromise.then((_originalResult) => {

                if (typeof (_originalResult.result[_key]) !== 'undefined') {
                    _originalResult.result = _originalResult.result[_key];
                }


                _resolve(_originalResult);
            }, (_e) => _reject(_e));
        });
    }

    /**
     * List Access Keys
     *
     *
     * @param _options
     * @param _callback
     * @returns {any}
     */
    accessKeys(_options: RequestOptions, _callback?: Function): Promise<ApiResult<models.AccessKeysGetResponse>> {

        return this._pipe_result(
            this._api.get( '/objects/objectstorages/access_keys', _options, _callback),
            'access_keys'
        );

    }



    /**
     * Get Single Object by UUID
     *
     * @param _uuid
     * @param _callback
     */
    accessKey(_access_key: string, _callback?: Function): Promise<ApiResult<models.AccessKeyGetResponse>> {
        return this._pipe_result(
            this._api.get( '/objects/objectstorages/access_keys/' + _access_key, _callback),
            'access_key'
        );
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
     * @returns {any|TRequest|LineCollection}
     */
    createAccessKey(_callback?: Function): Promise<ApiResult<models.AccessKeyCreateResponse>> {
        return this._api.post( '/objects/objectstorages/access_keys'  , _callback);
    }



    

}

export { ObjectStorage };
