

import {GridscaleObjects} from './GridscaleObjects';
import { APIClass } from '../api';


class Firewall extends GridscaleObjects {

    constructor(_api: APIClass) { super(_api, '/objects/firewalls'); }

}


export { Firewall };
