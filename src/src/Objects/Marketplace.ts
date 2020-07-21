import {GridscaleObjects} from './GridscaleObjects';
import { APIClass, ApiResult, RequestOptions } from '../api';
import * as models from './model/models';

interface Marketplace {
    list(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.MarketplaceApplicationsGetResponse>>;
    get(_uuid: string, _callback?: Function): Promise<ApiResult<models.MarketplaceApplicationGetResponse>>;
    create(_attributes: Object, _callback?: Function): Promise<ApiResult<models.MarketplaceApplicationCreateResponse>>;
}
class Marketplace extends GridscaleObjects {

    constructor(_api: APIClass) { super(_api, '/objects/marketplace/applications'); }

}


export { Marketplace };
