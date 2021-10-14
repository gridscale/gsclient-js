/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $IsoimagesUsage = {
    properties: {
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        description: {
            type: 'string',
        },
        source_url: {
            type: 'string',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        status: {
            type: 'string',
        },
        create_time: {
            type: 'string',
            format: 'date-time',
        },
        name: {
            type: 'string',
        },
        version: {
            type: 'string',
        },
        private: {
            type: 'boolean',
        },
        change_time: {
            type: 'string',
            format: 'date-time',
        },
        capacity: {
            type: 'number',
        },
        project_uuid: {
            type: 'string',
        },
        deleted: {
            type: 'boolean',
        },
        current_usage_per_minute: {
            type: 'CurrentUsagePerMinute',
        },
        usage_per_interval: {
            type: 'UsagePerInterval',
        },
    },
};