

import {GridscaleObjects} from './GridscaleObjects';
import { APIClass } from '../api';


class Events extends GridscaleObjects {

    constructor(_api: APIClass) { super(_api, '/objects/events'); }

}


export { Events };
