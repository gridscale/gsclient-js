import { APIClass, RequestOptions, ApiResult, GenericApiResult } from '../api';
import * as models from './../Specs';


class Deleted {

  // Naming
  public _api: APIClass;
  public _defaults: RequestOptions;


  /**
   * Create Object Endpoint
   *
   *
   * @param _api API Class Instance
   * @param _path Path to the Object
   */
  constructor(_api: APIClass) {
      this._api = _api;

      this._defaults = {
          'page': 0,
          'limit' : 25
      };
  }

  /**
   * Overwrite Default Settings for this Type
   *
   * @param _options
   */
  public setDefaults( _options: RequestOptions ) {
    this._defaults = {
      ...this._defaults,
      ..._options
    };
  }

  _buildRequestOptions (_options?: RequestOptions) {

      // Clone Defaults
    let defaults = {
      ...this._defaults,
      ..._options || {}
    };

      // Return Default Values
      return defaults;
  }

  _deleted(_key: string, _options?: RequestOptions, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<GenericApiResult>> {
    const requestOptions = this._buildRequestOptions(_options);

    // Set Callback
    if (typeof _options === 'function' && _callback === undefined) {
        _callback = _options;
    }
      return this._api.get( '/objects/deleted/' + _key, _options, _callback);
  }



  ips(_options?: RequestOptions, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<models.DeletedIpsGetResponse>> {
    return this._deleted('ips', _options, _callback);
  }

  isoimages(_options?: RequestOptions, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<models.DeletedIsoimagesGetResponse>> {
    return this._deleted('isoimages', _options, _callback);
  }

  networks(_options?: RequestOptions, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<models.DeletedNetworksGetResponse>> {
    return this._deleted('networks', _options, _callback);
  }

  servers(_options?: RequestOptions, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<models.DeletedServersGetResponse>> {
    return this._deleted('servers', _options, _callback);
  }

  snapshots(_options?: RequestOptions, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<models.DeletedSnapshotsGetResponse>> {
    return this._deleted('snapshots', _options, _callback);
  }

  storages(_options?: RequestOptions, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<models.DeletedStoragesGetResponse>> {
    return this._deleted('storages', _options, _callback);
  }

  templates(_options?: RequestOptions, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<models.DeletedTemplatesGetResponse>> {
    return this._deleted('templates', _options, _callback);
  }

  loadbalancers(_options?: RequestOptions, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<models.DeletedLoadbalancersGetResponse>> {
    return this._deleted('loadbalancers', _options, _callback);
  }

  paasServices(_options?: RequestOptions, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<models.DeletedPaasServicesGetResponse>> {
    return this._deleted('paas_services', _options, _callback);
  }


}

export { Deleted };
