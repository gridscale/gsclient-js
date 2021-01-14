"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$LinkNetwork = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$LinkNetwork = {
    properties: {
        object_uuid: {
            type: 'string',
            isRequired: true,
            format: 'uuid',
        },
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

//# sourceMappingURL=$LinkNetwork.js.map
