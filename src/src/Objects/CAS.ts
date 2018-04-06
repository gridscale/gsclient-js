
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



    tasks = {
      list : (_options = {},_callback?) =>{
          return this._api.get( '/objects/cas/tasks',_options,_callback)
      },
      get: (_uuid,_callback?) =>{
          return this._api.get( '/objects/cas/tasks/' + _uuid,_callback);
      },
      remove: (_uuid,_callback?) => {
          return this._api.remove( '/objects/cas/tasks/' + _uuid,_callback);
      },
      create: (_data, _callback?) => {
          return this._api.post( '/objects/cas/tasks', _data ,_callback);
      },
      patch: (_uuid,_attributes,_callback?) => {
          return this._api.patch(  '/objects/cas/tasks/' + _uuid , _attributes ,_callback);
      },
      events: (_uuid, _options = {},_callback?) => {
        return this._api.get( '/objects/cas/tasks/' + _uuid + '/events',_options,_callback);
      }
    }



    events = {
      list : (_options = {},_callback?) =>{
          return this._api.get( '/objects/cas/events',_options,_callback)
      },
      get: (_uuid,_callback?) =>{
          return this._api.get( '/objects/cas/events/' + _uuid,_callback);
      }
    }
    //
    //
    //
    actions = {
      list : (_options = {},_callback?) =>{
          return this._api.get( '/objects/cas/actions',_options,_callback)
      },
      get: (_uuid,_callback?) =>{
          return this._api.get( '/objects/cas/actions/' + _uuid,_callback);
      }
    }

}

export { CAS }
