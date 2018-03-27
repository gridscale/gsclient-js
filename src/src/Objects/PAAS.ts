
class PAAS {

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

    serviceTemplates = {
      list : (_options = {},_callback?) =>{
          return this._api.get( '/objects/paas/service_templates',_options,_callback)
      },
      get: (_uuid,_callback?) =>{
          return this._api.get( '/objects/paas/service_templates/' + _uuid,_callback);
      }
    }


    securityZones = {
      list : (_options = {},_callback?) =>{
          return this._api.get( '/objects/paas/security_zones',_options,_callback)
      },
      get: (_uuid,_callback?) =>{
          return this._api.get( '/objects/paas/security_zones/' + _uuid,_callback);
      },
      remove: (_uuid,_callback?) => {
          return this._api.remove( '/objects/paas/security_zones/' + _uuid,_callback);
      },
      create: (_data, _callback?) => {
          return this._api.post( '/objects/paas/security_zones', _data ,_callback);
      },
      patch: (_uuid,_attributes,_callback?) => {
          return this._api.patch(  '/objects/paas/security_zones/' + _uuid , _attributes ,_callback);
      },
    }


    services = {
      list : (_options = {},_callback?) =>{
          return this._api.get( '/objects/paas/services',_options,_callback)
      },
      get: (_uuid,_callback?) =>{
          return this._api.get( '/objects/paas/services/' + _uuid,_callback);
      },
      remove: (_uuid,_callback?) => {
          return this._api.remove( '/objects/paas/services/' + _uuid,_callback);
      },
      create: (_data, _callback?) => {
          return this._api.post( '/objects/paas/services', _data ,_callback);
      },
      patch: (_uuid,_attributes,_callback?) => {
          return this._api.patch(  '/objects/paas/services/' + _uuid , _attributes ,_callback);
      },
      events:(_uuid,_callback?) =>{
          return this._api.get( '/objects/paas/services/' + _uuid + '/events',_callback);
      },
    }

}

export { PAAS }
