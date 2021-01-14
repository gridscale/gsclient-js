"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesProperties = void 0;
var RulesProperties;
(function (RulesProperties) {
    /**
     * Either udp or tcp
     */
    var protocol;
    (function (protocol) {
        protocol["UDP"] = "udp";
        protocol["TCP"] = "tcp";
    })(protocol = RulesProperties.protocol || (RulesProperties.protocol = {}));
    /**
     * This defines what the firewall will do. Either accept or drop.
     */
    var action;
    (function (action) {
        action["ACCEPT"] = "accept";
        action["DROP"] = "drop";
    })(action = RulesProperties.action || (RulesProperties.action = {}));
})(RulesProperties = exports.RulesProperties || (exports.RulesProperties = {}));

//# sourceMappingURL=RulesProperties.js.map
