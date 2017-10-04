

import {GridscaleObjects} from './GridscaleObjects';


class Firewall extends GridscaleObjects {

    constructor(_api) { super(_api,'/objects/firewalls'); }

}


export { Firewall }
