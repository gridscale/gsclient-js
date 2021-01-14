/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PaasSecurityZone = {
    properties: {
        location_country: {
            type: 'string',
            format: 'string',
        },
        relations: {
            type: 'PaasSecurityZoneRelation',
        },
        create_time: {
            type: 'string',
            format: 'date-time',
        },
        location_iata: {
            type: 'string',
        },
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        location_name: {
            type: 'string',
            format: 'string',
        },
        status: {
            type: 'string',
        },
        location_uuid: {
            type: 'string',
            format: 'uuid',
        },
        change_time: {
            type: 'string',
            format: 'date-time',
        },
        name: {
            type: 'string',
        },
    },
};