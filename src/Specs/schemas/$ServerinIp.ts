/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ServerinIp = {
    type: 'array',
    contains: {
        properties: {
            create_time: {
                type: 'string',
                format: 'date-time',
            },
            server_uuid: {
                type: 'string',
            },
            server_name: {
                type: 'string',
            },
        },
    },
};