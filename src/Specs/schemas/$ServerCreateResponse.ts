/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ServerCreateResponse = {
    properties: {
        server_uuid: {
            type: 'string',
            format: 'uuid',
        },
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        request_uuid: {
            type: 'string',
            format: 'uuid',
        },
        network_uuids: {
            type: 'array',
            contains: {
                type: 'string',
                format: 'uuid',
            },
        },
        storage_uuids: {
            type: 'array',
            contains: {
                type: 'string',
                format: 'uuid',
            },
        },
        ipaddr_uuids: {
            type: 'array',
            contains: {
                type: 'string',
                format: 'uuid',
            },
        },
    },
};