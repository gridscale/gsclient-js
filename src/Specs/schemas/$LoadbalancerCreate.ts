/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LoadbalancerCreate = {
    properties: {
        name: {
            type: 'string',
            isRequired: true,
        },
        forwarding_rules: {
            type: 'array',
            contains: {
                type: 'LoadbalancerCreateForwardingRules',
            },
            isRequired: true,
        },
        backend_servers: {
            type: 'array',
            contains: {
                type: 'LoadbalancerCreateBackendServers',
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