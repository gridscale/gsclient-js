import { GridscaleObjects } from './GridscaleObjects';
import { APIClass, ApiResult, RequestOptions, VoidApiResult } from '../api';
import { MarketplaceNamedVersion } from './MarketplaceService';


export type MarketplaceProductInterval = 'minute' | 'hour' | 'day' | 'month' | 'quarter' | 'year';
export type MarketplaceProductType = 'subscription' | 'metered';

export interface MarketplaceProductExcerpt {
  type: 'product_excerpt';
  id: string;
  attributes: {
    interval: MarketplaceProductInterval;
    price_per_interval_in_euro_cent: number;
    type: MarketplaceProductType;
  };
  links: {
    self?: string;
  }
}

export interface MarketplacePlanDetailResponse {
  data: MarketplacePlanDetailData;
  included: (
    MarketplaceNamedVersion | MarketplaceProductExcerpt
  )[]
}

export interface MarketplacePlanDetailAttributes {
  plan_key: string;
  name: string;
  terms_of_use: string;
  description: string;
  features: string[];
  state: 'private' | 'archived' | 'public' | 'deleted';
  allow_updates_from: string[];
}

export interface MarketplacePlanDetailData {
  attributes: MarketplacePlanDetailAttributes;
  id: string;
  type: 'detailed_plan';
  relationships: {
    version: {
      data: {
        id: string;
        type: 'named_version';
      }
    };
    product_excerpts: {
      data: {
        id: string;
        type: 'product_excerpt'
      }[]
    }
  }
}

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
