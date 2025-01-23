

import { GridscaleObjects } from './GridscaleObjects';
import { APIClass, ApiResult, RequestOptions } from '../api';
import * as models from '../Specs';

interface PaasDeprecatedClusters {
    list(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.PaasDeprecatedClustersGetResponse>>;
}

class PaasDeprecatedClusters extends GridscaleObjects {
    api: APIClass;

    constructor(_api: APIClass) {
        super(_api, '/objects/paas/deprecated_kubernetes_clusters');

        this.api = _api;
    }
}


export { PaasDeprecatedClusters };
