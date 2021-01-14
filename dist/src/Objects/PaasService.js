"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaasService = void 0;
var GridscaleObjects_1 = require("./GridscaleObjects");
var PaasServiceMetrics_1 = require("./PaasServiceMetrics");
var PaasService = /** @class */ (function (_super) {
    __extends(PaasService, _super);
    function PaasService(_api) {
        var _this = _super.call(this, _api, '/objects/paas/services') || this;
        _this.api = _api;
        return _this;
    }
    PaasService.prototype.listMetrics = function (_uuid, _callback) {
        return new PaasServiceMetrics_1.PaasServiceMetrics(this._api, _uuid).list({}, _callback);
    };
    PaasService.prototype.renewCredentials = function (_serviceUUID) {
        return this._api.patch(this._basepath + '/' + _serviceUUID + '/renew_credentials', {});
    };
    return PaasService;
}(GridscaleObjects_1.GridscaleObjects));
exports.PaasService = PaasService;

//# sourceMappingURL=PaasService.js.map
