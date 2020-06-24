

import {GridscaleObjects} from './GridscaleObjects';
import { APIClass } from '../api';


class Template extends GridscaleObjects {

    constructor(_api: APIClass) { super(_api, '/objects/templates'); }

}


export { Template };


