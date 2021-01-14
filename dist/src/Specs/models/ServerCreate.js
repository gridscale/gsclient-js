"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerCreate = void 0;
var ServerCreate;
(function (ServerCreate) {
    /**
     * Specifies the hardware settings for the virtual machine.
     */
    var hardware_profile;
    (function (hardware_profile) {
        hardware_profile["DEFAULT"] = "default";
        hardware_profile["NESTED"] = "nested";
        hardware_profile["LEGACY"] = "legacy";
        hardware_profile["CISCO_CSR"] = "cisco_csr";
        hardware_profile["SOPHOS_UTM"] = "sophos_utm";
        hardware_profile["F5_BIGIP"] = "f5_bigip";
        hardware_profile["Q35"] = "q35";
        hardware_profile["Q35_NESTED"] = "q35_nested";
    })(hardware_profile = ServerCreate.hardware_profile || (ServerCreate.hardware_profile = {}));
})(ServerCreate = exports.ServerCreate || (exports.ServerCreate = {}));

//# sourceMappingURL=ServerCreate.js.map
