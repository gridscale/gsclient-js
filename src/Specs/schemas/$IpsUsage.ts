/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $IpsUsage = {
    properties: {
        create_time: {
            type: 'string',
            format: 'date-time',
        },
        status: {
            type: 'string',
        },
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        location_country: {
            type: 'string',
            format: 'string',
        },
        prefix: {
            type: 'string',
        },
        delete_block: {
            type: 'boolean',
        },
        failover: {
            type: 'boolean',
        },
        location_uuid: {
            type: 'string',
            format: 'uuid',
        },
        location_name: {
            type: 'string',
            format: 'string',
        },
        location_iata: {
            type: 'string',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        change_time: {
            type: 'string',
            format: 'date-time',
        },
        ip: {
            type: 'string',
        },
        family: {
            type: 'Enum',
        },
        reverse_dns: {
            type: 'string',
        },
        name: {
            type: 'string',
        },
        partner_uuid: {
            type: 'string',
            format: 'uuid',
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