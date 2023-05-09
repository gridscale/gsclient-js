import { GridscaleObjects } from './GridscaleObjects';
import { APIClass, ApiResult, RequestOptions } from '../api';

export interface MarketplaceNamedPlan {
  type: 'named_plan';
  id: string;
  attributes: {
    name: string;
  };
  links: {
    self?: string;
  };
}

export interface MarketplaceServiceListRow {
  attributes: {
    name: string;
    category_name: string;
    links: {
      linkServiceDetails: string
    };
    logo: string;
    state: string;
    vendor_name: string;
    description?: string;
  };
  id: string;
  type: string;
}



export interface MarketplaceServiceListResponse {
  data: MarketplaceServiceListRow[],
  links: {
    first: string;
    last: string;
    next: string;
    prev: string;
    self: string;
  };
  meta: {
    count: string;
    limit: string;
    page: string;
    total: string;
  };
}

export interface MarketplaceServiceDetailData {
  attributes: {
    name: string;
    description: string;
    category_name: string;
    logo: string;
    state: string;
  };
  id: string;
  type: 'services';
  relationships: {
    vendor?: {
      data: {
        id: string,
        type: 'vendors',
      }
    },
    named_versions?: {
      data: [
        {
          id: string,
          type: 'named_version',
        }
      ]
    }
  }
}

export interface MarketplaceVendorAttributes {
  name: string;
  description: string;
  support_contact_uuid: string;
  legal_contact_uuid: string;
  partner_uuid: string;
}

export interface MarketplaceNamedVersion {
  type: 'named_version';
  id: string;
  attributes: MarketplaceNamedVersionAttributes;
  links: {
    self?: string;
  }
}
export interface MarketplaceNamedVersionAttributes {
  name: string;
}

export interface MarketplaceServiceDetailVendor {
  attributes: MarketplaceVendorAttributes;
  id: string;
  type: 'vendors';
}



export interface MarketplaceServiceDetailResponse {
  data: MarketplaceServiceDetailData;
  included: (
    MarketplaceServiceDetailVendor | MarketplaceNamedVersion
  )[];
  links: {
    self?: string;
    relatedVersions?: string;
  }
}


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
