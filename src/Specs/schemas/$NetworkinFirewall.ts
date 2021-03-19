/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $NetworkinFirewall = {
    type: 'array',
    contains: {
        properties: {
            mac: {
                type: 'string',
            },
            network_uuid: {
                type: 'string',
            },
            network_type: {
                type: 'string',
            },
            network_name: {
                type: 'string',
            },
            server_uuid: {
                type: 'string',
                format: 'uuid',
            },
            server_name: {
                type: 'string',
            },
            object_name: {
                type: 'string',
            },
        },
    },
};