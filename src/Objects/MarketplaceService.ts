import { GridscaleObjects } from './GridscaleObjects';
import { APIClass, ApiResult, RequestOptions } from '../api';
import { MarketplaceServiceDetailResponse, MarketplaceServiceListResponse } from '../custom.models';



interface MarketplaceService {
  list(
    _options?: RequestOptions,
    _callback?: Function
  ): Promise<ApiResult<MarketplaceServiceListResponse>>;
  get(
    _uuid: string,
    _callback?: Function
  ): Promise<ApiResult<MarketplaceServiceDetailResponse>>;
}
class MarketplaceService extends GridscaleObjects {
  constructor(_api: APIClass) {
    super(_api, '/marketplace/v1/services');
  }
}

export { MarketplaceService };
