import { PAASServiceTemplate } from './PAASServiceTemplate';
import { PAASSecurityZone } from './PAASSecurityZone';
import { PAASService } from './PAASService';
import { APIClass } from '../api';
/**
 * this class is only a wrapper to the PAASService, PAASServiceTemplate and PAASSecurityZone classes, due to historical reasons...
 */
declare class PAAS {
    private _api;
    constructor(_api: APIClass);
    serviceTemplates: PAASServiceTemplate;
    securityZones: PAASSecurityZone;
    services: PAASService;
}
export { PAAS };
