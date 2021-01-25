/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ServerUpdate = {
    properties: {
        name: {
            type: 'string',
        },
        cores: {
            type: 'number',
        },
        memory: {
            type: 'number',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        availability_zone: {
            type: 'string',
        },
        auto_recovery: {
            type: 'string',
        },
    },
};