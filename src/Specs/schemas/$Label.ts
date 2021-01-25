/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Label = {
    properties: {
        label: {
            type: 'string',
        },
        create_time: {
            type: 'string',
            format: 'datetime',
        },
        change_time: {
            type: 'string',
            format: 'dattime',
        },
        relations: {
            type: 'array',
            contains: {
                properties: {
                },
            },
        },
        status: {
            type: 'string',
        },
    },
};