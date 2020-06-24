

import {GridscaleObjects} from './GridscaleObjects';
import { APIClass } from '../api';


class ISOImage extends GridscaleObjects {
    constructor(_api: APIClass) { super(_api, '/objects/isoimages'); }
}

 export { ISOImage };

