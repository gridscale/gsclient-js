/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Sshkey = {
    properties: {
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        user_uuid: {
            type: 'string',
            format: 'uuid',
        },
        create_time: {
            type: 'string',
            format: 'date-time',
        },
        status: {
            type: 'string',
        },
        change_time: {
            type: 'string',
            format: 'date-time',
        },
        name: {
            type: 'string',
        },
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        sshkey: {
            type: 'string',
        },
    },
};