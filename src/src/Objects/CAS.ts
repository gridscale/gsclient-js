
class CAS {

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
    tasks(_callback?){

        return this._api.get( '/objects/cas/tasks',_callback)

    }



    /**
     * Get Single Object by UUID
     *
     * @param _uuid
     * @param _callback
     */
    task(_access_key,_callback?) {
        return this._api.get( '/objects/cas/tasks/' + _access_key,_callback);
    }

    /**
     * Remove Access Key
     *
     * @param _uuid
     * @param _callback
     */
    remove(_access_key,_callback?) {
        return this._api.remove( '/objects/cas/tasks/' + _access_key,_callback);
    }


    /**
     * Creates new Access Key
     *
     * @param _callback
     * @returns {any|TRequest|LineCollection}
     */
    create(_callback?) {
        return this._api.post( '/objects/cas/tasks'  ,_callback);
    }

    /**
     * Patch object
     * @param _attributes
     * @param _callback
     * @returns {any|TRequest|LineCollection}
     */
    patch(_uuid,_attributes,_callback?) {
        return this._api.patch(  '/objects/cas/tasks/' + _uuid , _attributes ,_callback);
    }



    /**
     * List Access Keys
     *
     *
     * @param _options
     * @param _callback
     * @returns {any}
     */
    events(_callback?){
        return this._api.get( '/objects/cas/events' ,_callback)

    }



    /**
     * Get Single Object by UUID
     *
     * @param _uuid
     * @param _callback
     */
    event(_uuid,_callback?) {
        return this._api.get( '/objects/cas/events/' + _uuid,_callback);
    }

    /**
     * List Access Keys
     *
     *
     * @param _options
     * @param _callback
     * @returns {any}
     */
    actions(_callback?){
        return this._api.get( '/objects/cas/actions' ,_callback)

    }



    /**
     * Get Single Object by UUID
     *
     * @param _uuid
     * @param _callback
     */
    action(_uuid,_callback?) {
        return this._api.get( '/objects/cas/action/' + _uuid,_callback);
    }

}

export { CAS }
