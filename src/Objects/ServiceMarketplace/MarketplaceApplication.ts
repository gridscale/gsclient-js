import { GridscaleObjects } from '../GridscaleObjects';
import { APIClass, ApiResult, RequestOptions } from '../../api';
import { MarketplaceApplicationDetailResponse, MarketplaceApplicationListResponse } from '../../custom.models';



interface MarketplaceApplication {
  list(
    _options?: RequestOptions,
    _callback?: Function
  ): Promise<ApiResult<MarketplaceApplicationListResponse>>;
  get(
    _uuid: string,
    _callback?: Function
  ): Promise<ApiResult<MarketplaceApplicationDetailResponse>>;
}
class MarketplaceApplication extends GridscaleObjects {
  constructor(_api: APIClass) {
    super(_api, '/marketplace/v1/applications');
  }
}

export { MarketplaceApplication };
