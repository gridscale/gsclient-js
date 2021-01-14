/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Snapshot = {
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
        location_country: {
            type: 'string',
            format: 'string',
        },
        usage_in_minutes: {
            type: 'number',
        },
        location_uuid: {
            type: 'string',
            format: 'uuid',
        },
        change_time: {
            type: 'string',
            format: 'date-time',
        },
        license_product_no: {
            type: 'number',
        },
        current_price: {
            type: 'number',
            format: 'float',
        },
        create_time: {
            type: 'string',
            format: 'date-time',
        },
        capacity: {
            type: 'number',
        },
        location_name: {
            type: 'string',
            format: 'string',
        },
        location_iata: {
            type: 'string',
        },
        parent_uuid: {
            type: 'string',
        },
    },
};