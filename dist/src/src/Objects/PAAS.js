"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PAASServiceTemplate_1 = require("./PAASServiceTemplate");
var PAASSecurityZone_1 = require("./PAASSecurityZone");
var PAASService_1 = require("./PAASService");
var PAASServiceMetrics_1 = require("./PAASServiceMetrics");
/**
 * this class is only a wrapper to the PAASService, PAASServiceTemplate and PAASSecurityZone classes, due to historical reasons...
 */
var PAAS = /** @class */ (function () {
    function PAAS(_api) {
        this._api = _api;
        this.serviceTemplates = new PAASServiceTemplate_1.PAASServiceTemplate(this._api);
        this.securityZones = new PAASSecurityZone_1.PAASSecurityZone(this._api);
        this.services = new PAASService_1.PAASService(this._api);
        // tslint:disable-next-line: no-any
        this.services.listMetrics = function (_uuid, _callback) {
            return new PAASServiceMetrics_1.PAASServiceMetrics(_api, _uuid).list({}, _callback);
        };
    }
    return PAAS;
}());
exports.PAAS = PAAS;

//# sourceMappingURL=PAAS.js.map
