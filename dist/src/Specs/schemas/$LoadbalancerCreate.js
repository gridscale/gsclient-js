"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$LoadbalancerCreate = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$LoadbalancerCreate = {
    properties: {
        name: {
            type: 'string',
            isRequired: true,
        },
        forwarding_rules: {
            type: 'array',
            contains: {
                properties: {},
            },
            isRequired: true,
        },
        backend_servers: {
            type: 'array',
            contains: {
                properties: {},
            },
            isRequired: true,
        },
        status: {
            type: 'string',
        },
        redirect_http_to_https: {
            type: 'boolean',
            isRequired: true,
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
            isRequired: true,
        },
        algorithm: {
            type: 'string',
            isRequired: true,
        },
        listen_ipv4_uuid: {
            type: 'string',
            isRequired: true,
            format: 'uuid',
        },
        listen_ipv6_uuid: {
            type: 'string',
            isRequired: true,
            format: 'uuid',
        },
    },
};

//# sourceMappingURL=$LoadbalancerCreate.js.map
