/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Template = {
    properties: {
        status: {
            type: 'string',
        },
        published: {
            type: 'boolean',
        },
        ostype: {
            type: 'string',
        },
        location_uuid: {
            type: 'string',
            format: 'uuid',
        },
        version: {
            type: 'string',
        },
        location_iata: {
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
        usage_in_minutes: {
            type: 'number',
        },
        capacity: {
            type: 'number',
        },
        location_name: {
            type: 'string',
            format: 'string',
        },
        distro: {
            type: 'string',
        },
        description: {
            type: 'string',
        },
        current_price: {
            type: 'number',
            format: 'float',
        },
        location_country: {
            type: 'string',
            format: 'string',
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
        current_usage_per_minute: {
            type: 'CurrentUsagePerMinute',
        },
        accumulated_usage: {
            type: 'AccumulatedUsage',
        },
    },
};