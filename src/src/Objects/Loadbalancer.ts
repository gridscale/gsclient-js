

import {GridscaleObjects} from './GridscaleObjects';
import { APIClass } from '../api';


class Loadbalancer extends GridscaleObjects {

    constructor(_api: APIClass) { super(_api, '/objects/loadbalancers'); }

}

export { Loadbalancer };
