
class Deleted {

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

    ips( _options,_callback? ) {
        return this._api.get( '/objects/deleted/ips',_options,_callback)
    }


}

export { Deleted }
