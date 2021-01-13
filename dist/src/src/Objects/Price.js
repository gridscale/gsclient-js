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
var Price = /** @class */ (function (_super) {
    __extends(Price, _super);
    function Price(_api) {
        return _super.call(this, _api, '/prices') || this;
    }
    /**
     * List Objects
     *
     *
     * @param _options
     * @param _callback
     * @returns {any}
     */
    Price.prototype.list = function (_options, _callback) {
        return this._api.get(this._basepath, _options, _callback);
    };
    return Price;
}(GridscaleObjects_1.GridscaleObjects));
exports.Price = Price;

//# sourceMappingURL=Price.js.map
