import { PaasServiceTemplate } from './PaasServiceTemplate';
import { PaasSecurityZone } from './PaasSecurityZone';
import { PaasService } from './PaasService';
import { APIClass } from '../api';
import { PaasDeprecatedClusters } from './PaasDeprecatedClusters';

/**
 * this class is only a wrapper to the PaasService, PaasServiceTemplate and PaasSecurityZone classes, due to historical reasons...
 * @deprecated
 */
class PAAS {
    serviceTemplates: PaasServiceTemplate;
    securityZones: PaasSecurityZone;
    services: PaasService;
    deprecatedClusters: PaasDeprecatedClusters;

    constructor(private _api: APIClass) {
        this.serviceTemplates = new PaasServiceTemplate(this._api);
        this.securityZones = new PaasSecurityZone(this._api);
        this.services = new PaasService(this._api);    
     }




}

export { PAAS };
