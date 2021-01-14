import { PaasServiceTemplate } from './PaasServiceTemplate';
import { PaasSecurityZone } from './PaasSecurityZone';
import { PaasService } from './PaasService';
import { APIClass } from '../api';
/**
 * this class is only a wrapper to the PaasService, PaasServiceTemplate and PaasSecurityZone classes, due to historical reasons...
 */
declare class PAAS {
    private _api;
    constructor(_api: APIClass);
    serviceTemplates: PaasServiceTemplate;
    securityZones: PaasSecurityZone;
    services: PaasService;
}
export { PAAS };
