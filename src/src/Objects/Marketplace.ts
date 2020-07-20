import {GridscaleObjects} from './GridscaleObjects';
import { APIClass, ApiResult, RequestOptions } from '../api';
import * as models from './model/models';


class Marketplace extends GridscaleObjects {

    constructor(_api: APIClass) { super(_api, '/objects/marketplace/applications'); }

    // override some generic function to set explicit return type
    list(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.MarketplaceApplicationsGetResponse>> {
        return super._pipe_result(
            super.list(_options, _callback),
            'applications'
        );
    }
    get(_uuid: string, _callback?: Function): Promise<ApiResult<models.MarketplaceApplicationGetResponse>> {
        return super._pipe_result(
            super.get(_uuid, _callback),
            'application'
        );
    }
    create(_attributes: Object, _callback?: Function): Promise<ApiResult<models.MarketplaceApplicationCreateResponse>> {
        return super.create(_attributes, _callback);
    }
}


export { Marketplace };
