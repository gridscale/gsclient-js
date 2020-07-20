

import {GridscaleObjects} from './GridscaleObjects';
import { APIClass, ApiResult, RequestOptions } from '../api';
import * as models from './model/models';


class PAASServiceTemplate extends GridscaleObjects {

    constructor(_api: APIClass) { super(_api, '/objects/paas/service_templates'); }

    // override some generic function to set explicit return type
    list(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.PaasServiceTemplatesGetResponse>> {
        return super._pipe_result(
            super.list(_options, _callback),
            'paas_service_templates'
        );
    }
    

}


export { PAASServiceTemplate };
