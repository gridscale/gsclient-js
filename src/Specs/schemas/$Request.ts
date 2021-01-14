/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Request = {
    properties: {
        create_time: {
            type: 'string',
            isRequired: true,
            format: 'date-time',
        },
        status: {
            type: 'string',
            isRequired: true,
        },
        message: {
            type: 'string',
            isRequired: true,
        },
    },
};