

import {GridscaleObjects} from './GridscaleObjects';


class Loadbalancer extends GridscaleObjects {

    constructor(_api) { super(_api,'/objects/loadbalancers'); }

}

export { Loadbalancer }