"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$Loadbalancer = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$Loadbalancer = {
    properties: {
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        name: {
            type: 'string',
        },
        forwarding_rules: {
            type: 'array',
            contains: {
                properties: {},
            },
        },
        location_iata: {
            type: 'string',
        },
        location_uuid: {
            type: 'string',
            format: 'uuid',
        },
        backend_servers: {
            type: 'array',
            contains: {
                properties: {},
            },
        },
        change_time: {
            type: 'string',
            format: 'date-time',
        },
        status: {
            type: 'string',
        },
        current_price: {
            type: 'number',
            format: 'float',
        },
        location_country: {
            type: 'string',
            format: 'string',
        },
        redirect_http_to_https: {
            type: 'boolean',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        location_name: {
            type: 'string',
            format: 'string',
        },
        usage_in_minutes: {
            type: 'number',
        },
        algorithm: {
            type: 'string',
        },
        create_time: {
            type: 'string',
            format: 'date-time',
        },
        listen_ipv4_uuid: {
            type: 'string',
            format: 'uuid',
        },
        listen_ipv6_uuid: {
            type: 'string',
            format: 'uuid',
        },
    },
};

//# sourceMappingURL=$Loadbalancer.js.map
