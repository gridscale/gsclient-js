import { GridscaleObjects } from '../GridscaleObjects';
import { APIClass, ApiResult, RequestOptions } from '../../api';
import { MarketplaceApplicationInstanceCreateResult, MarketplaceApplicationInstanceDetailResponse, MarketplaceApplicationInstanceListResponse } from '../../custom.models';



class MarketplaceApplicationInstance extends GridscaleObjects {
  constructor(_api: APIClass) {
    super(_api, '/marketplace/v1/projects');
  }

  /**
   * Create a new application instance
   */
  create(_attributes: {
    name: string;
    application_uuid: string;
    plan_uuid: string;
    version_uuid: string;
    location_uuid: string;
    contract_uuid: string;
    project_uuid: string;
    release_uuid: string;
    vendor_keys: Record<string, string>;
    settings: Record<string, string>;
  }, _callback?: (response: Response, result: ApiResult<MarketplaceApplicationInstanceCreateResult>) => void) {
    return new Promise<ApiResult<MarketplaceApplicationInstanceCreateResult>>((resolve, reject) => {
      (this._api.post(this._basepath + '/' + _attributes.project_uuid + '/application-instances', _attributes, _callback) as Promise<ApiResult<MarketplaceApplicationInstanceCreateResult>>)
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
      reject(new Error('Unsupported method MarketplaceApplicationInstance.list: Please use `listInstances` method for this object type!'));
    });
  }

  /**
   * List Application instances
   */
  listInstances(_project_uuid?: string, _options?: RequestOptions, _callback?: (response: Response, result: ApiResult<MarketplaceApplicationInstanceListResponse>) => void): Promise<ApiResult<MarketplaceApplicationInstanceListResponse>> {
    // Get Defaults
    const requestOptions = this._buildRequestOptions(_options);

    return this._api.get(this._basepath + '/' + _project_uuid + '/application-instances', requestOptions, _callback);
  }

  /**
   * @deprecated: Please use `getInstance` method for this object type
   */
  get(_uuid: string, _callback?: (response: Response, result: ApiResult<any>) => void): Promise<ApiResult<any>> {
    return new Promise<ApiResult<any>>((resolve, reject) => {
      reject(new Error('Unsupported method MarketplaceApplicationInstance.list: Please use `getInstance` method for this object type!'));
    });
  }

  /**
   * get Application instance detail
   */
  getInstance(_project_uuid: string, _uuid: string, _callback?: (response: Response, result: ApiResult<MarketplaceApplicationInstanceDetailResponse>) => void): Promise<ApiResult<MarketplaceApplicationInstanceDetailResponse>> {
    return this._api.get(this._basepath + '/' + _project_uuid + '/application-instances/' + _uuid, {}, _callback);
  }

  /**
   * @deprecated: Please use `requestDeleteInstance` method for this object type
   */
  remove(_uuid: string, _callback?: (response: Response, result: ApiResult<any>) => void): Promise<ApiResult<void>> {
    return new Promise<ApiResult<any>>((resolve, reject) => {
      reject(new Error('Unsupported method MarketplaceApplicationInstance.list: Please use `requestDeleteInstance` method for this object type!'));
    });
  }

  /**
   * request deletion of the instance
   */
  requestDeleteInstance(_project_uuid: string, _uuid: string, _callback?: (response: Response, result: ApiResult<any>) => void): Promise<ApiResult<void>> {
    return this._api.remove(this._basepath + '/' + _project_uuid + '/application-instances/' + _uuid, _callback);
  }
}

export { MarketplaceApplicationInstance };
