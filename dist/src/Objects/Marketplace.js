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
exports.MarketplaceApplication = void 0;
var GridscaleObjects_1 = require("./GridscaleObjects");
var MarketplaceApplication = /** @class */ (function (_super) {
    __extends(MarketplaceApplication, _super);
    function MarketplaceApplication(_api) {
        return _super.call(this, _api, "/objects/marketplace/applications") || this;
    }
    return MarketplaceApplication;
}(GridscaleObjects_1.GridscaleObjects));
exports.MarketplaceApplication = MarketplaceApplication;

//# sourceMappingURL=Marketplace.js.map
