/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ServerinNetwork = {
    type: 'array',
    contains: {
        properties: {
            bootdevice: {
                type: 'boolean',
            },
            create_time: {
                type: 'string',
                format: 'date-time',
            },
            l3security: {
                type: 'array',
                contains: {
                    type: 'string',
                },
            },
            mac: {
                type: 'string',
            },
            network_uuid: {
                type: 'string',
            },
            object_name: {
                type: 'string',
            },
            object_uuid: {
                type: 'string',
                format: 'uuid',
            },
            ordering: {
                type: 'number',
            },
        },
    },
};