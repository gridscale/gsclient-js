import { GridscaleObjects } from './GridscaleObjects';
import { APIClass, ApiResult, RequestOptions, VoidApiResult } from '../api';
import * as models from './model/models';
import { MarketplaceApplicationCreate, MarketplaceApplicationUpdate } from './model/models';
interface Marketplace {
    list(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.MarketplaceApplicationsGetResponse>>;
    get(_uuid: string, _callback?: Function): Promise<ApiResult<models.MarketplaceApplicationGetResponse>>;
    create(_attributes: MarketplaceApplicationCreate, _callback?: Function): Promise<ApiResult<models.MarketplaceApplicationCreateResponse>>;
    patch(_uuid: string, _attributes: MarketplaceApplicationUpdate, _callback?: Function): Promise<ApiResult<VoidApiResult>>;
}
declare class Marketplace extends GridscaleObjects {
    constructor(_api: APIClass);
}
export { Marketplace };
