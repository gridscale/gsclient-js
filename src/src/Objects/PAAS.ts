import { PAASServiceTemplate } from "./PAASServiceTemplate";
import { PAASSecurityZone } from "./PAASSecurityZone";
import { PAASService } from "./PAASService";
import { PAASServiceMetrics } from "./PAASServiceMetrics";

/**
 * this class is only a wrapper to the PAASService, PAASServiceTemplate and PAASSecurityZone classes, due to historical reasons...
 */
class PAAS {
    constructor(private _api) {

        (this.services as unknown as any).listMetrics = (_uuid, _callback) => {
            var metrics = new PAASServiceMetrics(_api, _uuid);
            return metrics.list({}, _callback);
        }

    }

    serviceTemplates = new PAASServiceTemplate(this._api);
    securityZones = new PAASSecurityZone(this._api);
    services = new PAASService(this._api);
    
}

export { PAAS }
