

import {GridscaleObjects} from './GridscaleObjects';
import { APIClass } from '../api';


class SSHKey extends GridscaleObjects {

    constructor(_api: APIClass) { super(_api, '/objects/sshkeys'); }

}

export { SSHKey };


