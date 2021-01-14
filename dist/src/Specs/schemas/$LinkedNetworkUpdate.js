"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$LinkedNetworkUpdate = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$LinkedNetworkUpdate = {
    properties: {
        ordering: {
            type: 'number',
        },
        bootdevice: {
            type: 'boolean',
        },
        l3security: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        firewall: {
            type: 'FirewallRules',
        },
        firewall_template_uuid: {
            type: 'string',
            format: 'uuid',
        },
    },
};

//# sourceMappingURL=$LinkedNetworkUpdate.js.map
