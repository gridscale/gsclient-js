

import {GridscaleObjects} from './GridscaleObjects';
import { APIClass } from '../api';


class PAASSecurityZone extends GridscaleObjects {

    constructor(_api: APIClass) { super(_api, '/objects/paas/security_zones'); }

}


export { PAASSecurityZone };
