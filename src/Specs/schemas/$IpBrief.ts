/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $IpBrief = {
    properties: {
        create_time: {
            type: 'string',
            format: 'date-time',
        },
        status: {
            type: 'string',
        },
        relations: {
            type: 'IpRelation',
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
        location_iata: {
            type: 'string',
        },
        reverse_dns: {
            type: 'string',
        },
        current_price: {
            type: 'number',
            format: 'float',
        },
        usage_in_minutes: {
            type: 'number',
        },
        name: {
            type: 'string',
        },
        partner_uuid: {
            type: 'string',
            format: 'uuid',
        },
        current_usage_per_minute: {
            type: 'CurrentUsagePerMinute',
        },
        accumulated_usage: {
            type: 'AccumulatedUsage',
        },
    },
};