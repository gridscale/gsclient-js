import {GridscaleObjects} from './GridscaleObjects';


class Marketplace extends GridscaleObjects {

    constructor(_api) { super(_api,'/objects/marketplace/applications'); }

}


export { Marketplace }
