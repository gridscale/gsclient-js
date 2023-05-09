import { GridscaleObjects } from './GridscaleObjects';
import { APIClass, ApiResult, RequestOptions, VoidApiResult } from '../api';
import { MarketplaceNamedPlan } from './MarketplaceService';


export interface MarketplaceVersionDetailData {
  id: string;
  type: 'versions';
  attributes: {
    version: string,
    state: string;
  };
  relationships: {
    service: {
      data: {
        id: string;
        type: 'services';
      }
    };
    named_plans: {
      data: {
        id: string;
        type: 'named_plan'
      }[]
    };
  }
}



export interface MarketplaceVersionDetailResponse {
  data: MarketplaceVersionDetailData;
  included: (
    {
      type: 'services';
      id: string;
      attributes: {
        name: string;
        description: string;
        logo_url: string;
        category_name: string;
        state: string;
      }
    }
    |
    MarketplaceNamedPlan
  )[]
}


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
