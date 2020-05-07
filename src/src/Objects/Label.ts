import {GridscaleObjects} from './GridscaleObjects';
import { APIClass } from '../api';


class Label extends GridscaleObjects {

    constructor(_api: APIClass) { super(_api, '/objects/labels'); }


}


export { Label };
