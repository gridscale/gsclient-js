import {GridscaleObjects} from './GridscaleObjects';
import { APIClass } from '../api';
import * as models from './model/models';


class Marketplace extends GridscaleObjects {

    constructor(_api: APIClass) { super(_api, '/objects/marketplace/applications'); }


}


export { Marketplace };
