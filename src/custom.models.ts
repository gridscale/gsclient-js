/*************************************************************************************************************************
 * this file contains custom models, not yet included in the official gridscale api spec and therefore not auto generated
 *************************************************************************************************************************/

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

export interface MarketplacePlanSettingsResponse {
  $id: string;
  $schema: string;
  title: string;
  type: string;
  required: string[];
  properties: {
    [key: string]: {
      type: string;
      format: string;
      description: string;
    }
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

export interface MarketplaceApplicationListRow {
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



export interface MarketplaceApplicationListResponse {
  data: MarketplaceApplicationListRow[],
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

export interface MarketplaceApplicationDetailData {
  attributes: {
    name: string;
    description: string;
    category_name: string;
    logo: string;
    state: string;
  };
  id: string;
  type: 'applications';
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

export interface MarketplaceApplicationDetailVendor {
  attributes: MarketplaceVendorAttributes;
  id: string;
  type: 'vendors';
}



export interface MarketplaceApplicationDetailResponse {
  data: MarketplaceApplicationDetailData;
  included: (
    MarketplaceApplicationDetailVendor | MarketplaceNamedVersion
  )[];
  links: {
    self?: string;
    relatedVersions?: string;
  }
}

export interface MarketplaceApplicationInstanceCreateResult {
  links?: null;
  data?: {
    type: "application_instances",
    id: string;
    attributes?: {
      application_uuid: string;
      plan_uuid: string;
      version_uuid: string;
      release_uuid: string;
      name: string;
      state: string;
      settings: null;
      properties: null;
    }
  };
  included?: null;
  request_uuid?: string;
  object_uuid?: string;
}

export interface MarketplaceApplicationInstanceDataRow {
  type: "application_instances_list";
  id: string;
  attributes?: {
    name: string;
    state: string;
    links?: {
      linkApplicationInstanceDetail?: string;
    }
  }
}

export interface MarketplaceApplicationInstanceListResponse {
  links?: {
    self?: string;
    first?: string;
    prev?: string;
    next?: string;
    last?: string;
  },
  data?: MarketplaceApplicationInstanceDataRow[];
  meta?: {
    count?: string;
    limit?: string;
    page?: string;
    total?: string;
  }
}

export interface MarketplaceApplicationInstanceDetailData {
  type: "application_instances";
  id: string;
  attributes?: {
    application_uuid?: string;
    plan_uuid?: string;
    version_uuid?: string;
    release_uuid?: string;
    name?: string;
    state?: string;
    settings?: null;
    properties?: null;
  }
}

export interface MarketplaceApplicationInstanceDetailResponse {
  links?: null;
  data?: MarketplaceApplicationInstanceDetailData;
  included?: null;
}

export interface MarketplaceVersionDetailData {
  id: string;
  type: 'versions';
  attributes: {
    version: string,
    state: string;
  };
  relationships: {
    application: {
      data: {
        id: string;
        type: 'applications';
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
      type: 'applications';
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