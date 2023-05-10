import { GridscaleObjects } from './GridscaleObjects';
import { APIClass, ApiResult } from '../api';
import { MarketplaceVersionDetailResponse } from '../custom.models';


interface MarketplaceVersion {
  get(
    _uuid: string,
    _callback?: Function
  ): Promise<ApiResult<MarketplaceVersionDetailResponse>>;
}
class MarketplaceVersion extends GridscaleObjects {
  constructor(_api: APIClass) {
    super(_api, '/marketplace/v1/versions');
  }
}

export { MarketplaceVersion };
