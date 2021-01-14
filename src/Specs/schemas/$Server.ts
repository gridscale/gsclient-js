/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Server = {
    properties: {
        cores: {
            type: 'number',
        },
        relations: {
            type: 'ServerRelation',
        },
        legacy: {
            type: 'boolean',
        },
        memory: {
            type: 'number',
        },
        console_token: {
            type: 'string',
        },
        usage_in_minutes_memory: {
            type: 'number',
        },
        auto_recovery: {
            type: 'boolean',
        },
        create_time: {
            type: 'string',
            format: 'date-time',
        },
        current_price: {
            type: 'number',
            format: 'float',
        },
        location_country: {
            type: 'string',
            format: 'string',
        },
        location_uuid: {
            type: 'string',
            format: 'uuid',
        },
        usage_in_minutes_cores: {
            type: 'number',
        },
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        change_time: {
            type: 'string',
            format: 'date-time',
        },
        availability_zone: {
            type: 'string',
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
        hardware_profile: {
            type: 'string',
        },
        location_name: {
            type: 'string',
            format: 'string',
        },
        power: {
            type: 'boolean',
        },
        name: {
            type: 'string',
        },
        status: {
            type: 'string',
        },
    },
};