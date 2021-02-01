import { GridscaleObjects } from './GridscaleObjects';
import { APIClass, ApiResult, RequestOptions, VoidApiResult } from '../api';
import * as models from '../Specs';


interface MarketplaceApplication {
  list(
    _options?: RequestOptions,
    _callback?: Function
  ): Promise<ApiResult<models.MarketplaceApplicationsGetResponse>>;
  get(
    _uuid: string,
    _callback?: Function
  ): Promise<ApiResult<models.MarketplaceApplicationGetResponse>>;
  create(
    _attributes: models.MarketplaceApplicationCreate | models.MarketplaceApplicationImport,
    _callback?: Function
  ): Promise<ApiResult<models.MarketplaceApplicationCreateResponse>>;
  patch(
    _uuid: string,
    _attributes: models.MarketplaceApplicationUpdate,
    _callback?: Function
  ): Promise<ApiResult<VoidApiResult>>;
  remove(
    _uuid: string,
    _callback?: Function
  ): Promise<ApiResult<VoidApiResult>>;
  events(
    _uuid: string,
    _options?: RequestOptions, 
    _callback?: Function
  ): Promise<ApiResult<models.EventResponse>>;
}
class MarketplaceApplication extends GridscaleObjects {
  constructor(_api: APIClass) {
    super(_api, '/objects/marketplace/applications');
  }
}

export { MarketplaceApplication };
