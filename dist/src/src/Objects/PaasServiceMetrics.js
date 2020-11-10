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
var GridscaleObjects_1 = require("./GridscaleObjects");
var PaasServiceMetrics = /** @class */ (function (_super) {
    __extends(PaasServiceMetrics, _super);
    function PaasServiceMetrics(_api, _serviceUUID) {
        var _this = _super.call(this, _api, '/objects/paas/services/' + _serviceUUID + '/metrics') || this;
        _this._defaults = {};
        return _this;
    }
    return PaasServiceMetrics;
}(GridscaleObjects_1.GridscaleObjects));
exports.PaasServiceMetrics = PaasServiceMetrics;
//# sourceMappingURL=PaasServiceMetrics.js.map