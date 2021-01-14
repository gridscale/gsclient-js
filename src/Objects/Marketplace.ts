import { GridscaleObjects } from "./GridscaleObjects";
import { APIClass, ApiResult, RequestOptions, VoidApiResult } from "../api";
import * as models from "./../Specs/index";
import {
  MarketplaceApplicationCreate,
  MarketplaceApplicationUpdate,
} from "./../Specs/index";

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
    _attributes: MarketplaceApplicationCreate,
    _callback?: Function
  ): Promise<ApiResult<models.MarketplaceApplicationCreateResponse>>;
  patch(
    _uuid: string,
    _attributes: MarketplaceApplicationUpdate,
    _callback?: Function
  ): Promise<ApiResult<VoidApiResult>>;
}
class MarketplaceApplication extends GridscaleObjects {
  constructor(_api: APIClass) {
    super(_api, "/objects/marketplace/applications");
  }
}

export { MarketplaceApplication };
