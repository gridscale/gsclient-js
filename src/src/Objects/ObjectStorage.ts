class ObjectStorage {

    // Naming
    public _api;


    /**
     * Create Object Endpoint
     *
     *
     * @param _api API Class Instance
     * @param _path Path to the Object
     */
    constructor(_api){
        this._api = _api;



    }

    /**
     * List Access Keys
     *
     *
     * @param _options
     * @param _callback
     * @returns {any}
     */
    accessKeys(_callback?){

        return this._api.get( '/objects/objectstorages/access_keys',_callback)

    }



    /**
     * Get Single Object by UUID
     *
     * @param _uuid
     * @param _callback
     */
    accessKey(_access_key,_callback?) {
        return this._api.get( '/objects/objectstorages/access_keys/' + _access_key,_callback);
    }

    /**
     * Remove Access Key
     *
     * @param _uuid
     * @param _callback
     */
    removeAccessKey(_access_key,_callback?) {
        return this._api.remove( '/objects/objectstorages/access_keys/' + _access_key,_callback);
    }


    /**
     * Creates new Access Key
     *
     * @param _callback
     * @returns {any|TRequest|LineCollection}
     */
    createAccessKey(_callback?) {
        return this._api.post( '/objects/objectstorages/access_keys'  ,_callback);
    }



    /**
     * List Access Keys
     *
     *
     * @param _options
     * @param _callback
     * @returns {any}
     */
    buckets(_callback?){
        return this._api.get( '/objects/objectstorages/buckets' ,_callback)

    }



    /**
     * Get Single Object by UUID
     *
     * @param _uuid
     * @param _callback
     */
    bucket(_bucket_name,_callback?) {
        return this._api.get( '/objects/objectstorages/buckets/' + _bucket_name,_callback);
    }

}

export { ObjectStorage }
