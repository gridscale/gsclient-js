

import {GridscaleObjects} from './GridscaleObjects';
import { APIClass, ApiResult, RequestOptions } from '../api';
import * as models from './model/models';

interface PAASServiceTemplate {
    list(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.PaasServiceTemplatesGetResponse>>;
}

class PAASServiceTemplate extends GridscaleObjects {

    constructor(_api: APIClass) { super(_api, '/objects/paas/service_templates'); }


}


export { PAASServiceTemplate };
