/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LoadbalancerUpdate = {
    properties: {
        name: {
            type: 'string',
        },
        forwarding_rules: {
            type: 'array',
            contains: {
                type: 'LoadbalancerCreateForwardingRules',
            },
        },
        backend_servers: {
            type: 'array',
            contains: {
                type: 'LoadbalancerCreateBackendServers',
            },
        },
        status: {
            type: 'string',
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
        algorithm: {
            type: 'string',
        },
    },
};