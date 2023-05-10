import { GridscaleObjects } from './GridscaleObjects';
import { APIClass, ApiResult, RequestOptions } from '../api';
import { MarketplaceServiceInstanceCreateResult, MarketplaceServiceInstanceDetailResponse, MarketplaceServiceInstanceListResponse } from '../custom.models';



class MarketplaceServiceInstance extends GridscaleObjects {
  constructor(_api: APIClass) {
    super(_api, '/marketplace/v1/projects');
  }

  /**
   * Create a new service instance
   */
  create(_attributes: {
    name: string;
    service_uuid: string;
    plan_uuid: string;
    version_uuid: string;
    location_uuid: string;
    contract_uuid: string;
    project_uuid: string;
    release_uuid: string;
    vendor_keys: Record<string, string>;
    settings: Record<string, string>;
  }, _callback?: (response: Response, result: ApiResult<MarketplaceServiceInstanceCreateResult>) => void) {
    return new Promise<ApiResult<MarketplaceServiceInstanceCreateResult>>((resolve, reject) => {
      (this._api.post(this._basepath + '/' + _attributes.project_uuid + '/service-instances', _attributes, _callback) as Promise<ApiResult<MarketplaceServiceInstanceCreateResult>>)
        .then(res => {
          if (res.result?.data?.id) {
            resolve({
              ...res,
              result: {
                ...res.result,
                object_uuid: res.result.data.id,
                request_uuid: res.response.headers.get('x-correlate-id')
              }
            });
          } else {
            reject(new Error('unknown response'));
          }

        })
        .catch(e => reject(e));
    });
  }

  /**
   * @deprecated please use `listInstances` method for this object type
   */
  list(_options?: RequestOptions, _callback?: (response: Response, result: ApiResult<any>) => void): Promise<ApiResult<any>> {
    return new Promise<ApiResult<any>>((resolve, reject) => {
      reject(new Error('Unsupported method MarketplaceServiceInstance.list: Please use `listInstances` method for this object type!'));
    });
  }

  /**
   * List service instances
   */
  listInstances(_project_uuid?: string, _options?: RequestOptions, _callback?: (response: Response, result: ApiResult<MarketplaceServiceInstanceListResponse>) => void): Promise<ApiResult<MarketplaceServiceInstanceListResponse>> {
    // Get Defaults
    const requestOptions = this._buildRequestOptions(_options);

    return this._api.get(this._basepath + '/' + _project_uuid + '/service-instances', requestOptions, _callback);
  }

  /**
   * @deprecated: Please use `getInstance` method for this object type
   */
  get(_uuid: string, _callback?: (response: Response, result: ApiResult<any>) => void): Promise<ApiResult<any>> {
    return new Promise<ApiResult<any>>((resolve, reject) => {
      reject(new Error('Unsupported method MarketplaceServiceInstance.list: Please use `getInstance` method for this object type!'));
    });
  }

  /**
   * get service instance detail
   */
  getInstance(_project_uuid: string, _uuid: string, _callback?: (response: Response, result: ApiResult<MarketplaceServiceInstanceDetailResponse>) => void): Promise<ApiResult<MarketplaceServiceInstanceDetailResponse>> {
    return this._api.get(this._basepath + '/' + _project_uuid + '/service-instances/' + _uuid, {}, _callback);
  }

  /**
   * @deprecated: Please use `requestDeleteInstance` method for this object type
   */
  remove(_uuid: string, _callback?: (response: Response, result: ApiResult<any>) => void): Promise<ApiResult<void>> {
    return new Promise<ApiResult<any>>((resolve, reject) => {
      reject(new Error('Unsupported method MarketplaceServiceInstance.list: Please use `requestDeleteInstance` method for this object type!'));
    });
  }

  /**
   * request deletion of the instance
   */
  requestDeleteInstance(_project_uuid: string, _uuid: string, _callback?: (response: Response, result: ApiResult<any>) => void): Promise<ApiResult<void>> {
    return this._api.remove(this._basepath + '/' + _project_uuid + '/service-instances/' + _uuid, _callback);
  }
}

export { MarketplaceServiceInstance };
