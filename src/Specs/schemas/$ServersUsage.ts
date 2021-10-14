/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ServersUsage = {
    properties: {
        cores: {
            type: 'number',
        },
        memory: {
            type: 'number',
        },
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        power: {
            type: 'boolean',
        },
        deleted: {
            type: 'boolean',
        },
        name: {
            type: 'string',
        },
        status: {
            type: 'string',
        },
        current_usage_per_minute: {
            type: 'CurrentUsagePerMinute',
        },
        usage_per_interval: {
            type: 'UsagePerInterval',
        },
    },
};