/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $StoragesUsage = {
    properties: {
        parent_uuid: {
            type: 'string',
            format: 'uuid',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        name: {
            type: 'string',
        },
        deleted: {
            type: 'boolean',
        },
        status: {
            type: 'string',
        },
        storage_type: {
            type: 'Enum',
        },
        last_used_template: {
            type: 'string',
        },
        capacity: {
            type: 'number',
        },
        current_usage_per_minute: {
            type: 'CurrentUsagePerMinute',
        },
        usage_per_interval: {
            type: 'UsagePerInterval',
        },
    },
};