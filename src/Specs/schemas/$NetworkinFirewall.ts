/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $NetworkinFirewall = {
    type: 'array',
    contains: {
        properties: {
            create_time: {
                type: 'string',
                format: 'date-time',
            },
            network_uuid: {
                type: 'string',
            },
            network_name: {
                type: 'string',
            },
            object_uuid: {
                type: 'string',
                format: 'uuid',
            },
            object_name: {
                type: 'string',
            },
        },
    },
};