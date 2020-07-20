import { assignIn, isFunction, isUndefined } from 'lodash';
import { APIClass, RequestOptions, ApiResult, GenericApiResult } from '../api';
import * as models from './model/models';


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

        assignIn( this._defaults , _options );
  }

  _buildRequestOptions (_options?: RequestOptions) {

      // Clone Defaults
      const defaults = assignIn({}, this._defaults);

      // Add Options
      if ( !isUndefined( _options ) && !isFunction( _options ) ) {
          assignIn(defaults, _options);
      }

      // Return Default Values
      return defaults;
  }

  _deleted(_key: string, _options?: RequestOptions, _callback?: Function): Promise<ApiResult<GenericApiResult>> {
    const requestOptions = this._buildRequestOptions(_options);

    // Set Callback
    if ( isFunction( _options ) && isUndefined( _callback ) ) {
        _callback = _options;
    }
      return this._api.get( '/objects/deleted/' + _key, _options, _callback);
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


  ips(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.DeletedIpsGetResponse>> {
    return this._pipe_result(
      this._deleted('ips', _options, _callback),
      'deleted_ips'
    );
  }

  isoimages(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.DeletedIsoimagesGetResponse>> {
    return this._pipe_result(
      this._deleted('isoimages', _options, _callback),
      'deleted_isoimages'
    );
  }

  networks(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.DeletedNetworksGetResponse>> {
    return this._pipe_result(
      this._deleted('networks', _options, _callback),
      'deleted_networks'
    );
  }

  servers(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.DeletedServersGetResponse>> {
    return this._pipe_result(
      this._deleted('servers', _options, _callback),
      'deleted_servers'
    );
  }

  snapshots(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.DeletedSnapshotsGetResponse>> {
    return this._pipe_result(
      this._deleted('snapshots', _options, _callback),
      'deleted_snapshots'
    );
  }

  storages(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.DeletedStoragesGetResponse>> {
    return this._pipe_result(
      this._deleted('storages', _options, _callback),
      'deleted_storages'
    );
  }

  templates(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.DeletedTemplatesGetResponse>> {
    return this._pipe_result(
      this._deleted('templates', _options, _callback),
      'deleted_templates'
    );
  }

  loadbalancers(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.DeletedLoadbalancersGetResponse>> {
    return this._pipe_result(
      this._deleted('loadbalancers', _options, _callback),
      'deleted_loadbalancers'
    );
  }

  paasServices(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.DeletedPaasServicesGetResponse>> {
    return this._pipe_result(
      this._deleted('paas_services', _options, _callback),
      'deleted_paas_services'
    );
  }


}

export { Deleted };
