/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LoadbalancersUsage = {
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
                properties: {
                },
            },
        },
        backend_servers: {
            type: 'array',
            contains: {
                properties: {
                },
            },
        },
        change_time: {
            type: 'string',
            format: 'date-time',
        },
        status: {
            type: 'string',
        },
        redirect_http_to_https: {
            type: 'boolean',
        },
        algorithm: {
            type: 'string',
        },
        listen_ipv4_uuid: {
            type: 'string',
            format: 'uuid',
        },
        listen_ipv6_uuid: {
            type: 'string',
            format: 'uuid',
        },
        current_usage_per_minute: {
            type: 'CurrentUsagePerMinute',
        },
        usage_per_interval: {
            type: 'UsagePerInterval',
        },
    },
};