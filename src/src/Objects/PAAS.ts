import { PAASServiceTemplate } from './PAASServiceTemplate';
import { PAASSecurityZone } from './PAASSecurityZone';
import { PAASService } from './PAASService';
import { APIClass } from '../api';

/**
 * this class is only a wrapper to the PAASService, PAASServiceTemplate and PAASSecurityZone classes, due to historical reasons...
 */
class PAAS {
    constructor(private _api: APIClass) { }

    serviceTemplates = new PAASServiceTemplate(this._api);
    securityZones = new PAASSecurityZone(this._api);
    services = new PAASService(this._api);

}

export { PAAS };
