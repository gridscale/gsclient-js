/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Certificate = {
    properties: {
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        name: {
            type: 'string',
        },
        common_name: {
            type: 'string',
        },
        create_time: {
            type: 'string',
            format: 'date-time',
        },
        change_time: {
            type: 'string',
            format: 'date-time',
        },
        status: {
            type: 'string',
        },
        not_valid_after: {
            type: 'string',
        },
        fingerprints: {
            type: 'string',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
    },
};