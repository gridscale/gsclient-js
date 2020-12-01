"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PaasServiceTemplate_1 = require("./PaasServiceTemplate");
var PaasSecurityZone_1 = require("./PaasSecurityZone");
var PaasService_1 = require("./PaasService");
/**
 * this class is only a wrapper to the PaasService, PaasServiceTemplate and PaasSecurityZone classes, due to historical reasons...
 */
var PAAS = /** @class */ (function () {
    function PAAS(_api) {
        this._api = _api;
        this.serviceTemplates = new PaasServiceTemplate_1.PaasServiceTemplate(this._api);
        this.securityZones = new PaasSecurityZone_1.PaasSecurityZone(this._api);
        this.services = new PaasService_1.PaasService(this._api);
    }
    return PAAS;
}());
exports.PAAS = PAAS;
//# sourceMappingURL=PAAS.js.map