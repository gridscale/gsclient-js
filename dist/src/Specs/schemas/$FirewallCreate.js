"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$FirewallCreate = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$FirewallCreate = {
    properties: {
        name: {
            type: 'string',
            isRequired: true,
        },
        labels: {
            type: 'string',
        },
        rules: {
            type: 'FirewallRules',
            isRequired: true,
        },
    },
};

//# sourceMappingURL=$FirewallCreate.js.map
