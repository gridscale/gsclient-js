import { GridscaleObjects } from '../GridscaleObjects';
import { APIClass, ApiResult } from '../../api';
import { MarketplacePlanDetailResponse } from '../../custom.models';




interface MarketplacePlan {
  get(
    _uuid: string,
    _callback?: Function
  ): Promise<ApiResult<MarketplacePlanDetailResponse>>;
}
class MarketplacePlan extends GridscaleObjects {
  constructor(_api: APIClass) {
    super(_api, '/marketplace/v1/plans');
  }
}

export { MarketplacePlan };
