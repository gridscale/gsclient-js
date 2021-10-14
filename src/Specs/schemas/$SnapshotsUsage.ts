/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $SnapshotsUsage = {
    properties: {
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
        status: {
            type: 'string',
        },
        change_time: {
            type: 'string',
            format: 'date-time',
        },
        create_time: {
            type: 'string',
            format: 'date-time',
        },
        capacity: {
            type: 'number',
        },
        parent_uuid: {
            type: 'string',
        },
        parent_name: {
            type: 'string',
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