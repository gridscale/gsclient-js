import {GridscaleObjects} from './GridscaleObjects';
import { APIClass } from '../api';


class Marketplace extends GridscaleObjects {

    constructor(_api: APIClass) { super(_api, '/objects/marketplace/templates'); }

}


export { Marketplace };
