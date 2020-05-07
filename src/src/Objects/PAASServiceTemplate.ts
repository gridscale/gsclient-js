

import {GridscaleObjects} from './GridscaleObjects';
import { APIClass } from '../api';


class PAASServiceTemplate extends GridscaleObjects {

    constructor(_api: APIClass) { super(_api, '/objects/paas/service_templates'); }

}


export { PAASServiceTemplate };
