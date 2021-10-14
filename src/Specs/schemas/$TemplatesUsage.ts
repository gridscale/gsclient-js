/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TemplatesUsage = {
    properties: {
        status: {
            type: 'string',
        },
        ostype: {
            type: 'string',
        },
        version: {
            type: 'string',
        },
        change_time: {
            type: 'string',
            format: 'date-time',
        },
        private: {
            type: 'boolean',
        },
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        license_product_no: {
            type: 'number',
        },
        create_time: {
            type: 'string',
            format: 'date-time',
        },
        capacity: {
            type: 'number',
        },
        distro: {
            type: 'string',
        },
        description: {
            type: 'string',
        },
        name: {
            type: 'string',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
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