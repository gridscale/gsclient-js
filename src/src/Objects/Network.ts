

import {GridscaleObjects} from './GridscaleObjects';
import { APIClass } from '../api';


class Network extends GridscaleObjects {

    constructor(_api: APIClass) { super(_api, '/objects/networks'); }

}


export { Network };
