"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$IpCreate = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$IpCreate = {
    properties: {
        family: {
            type: 'Enum',
            isRequired: true,
        },
        failover: {
            type: 'boolean',
        },
        reverse_dns: {
            type: 'string',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        name: {
            type: 'string',
        },
    },
};

//# sourceMappingURL=$IpCreate.js.map
