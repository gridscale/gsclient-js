/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $StorageBackupsUsage = {
    properties: {
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        name: {
            type: 'string',
        },
        create_time: {
            type: 'string',
            format: 'date-time',
        },
        change_time: {
            type: 'string',
            format: 'date-time',
        },
        current_usage_per_minute: {
            type: 'CurrentUsagePerMinute',
        },
        usage_per_interval: {
            type: 'UsagePerInterval',
        },
    },
};