/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $NetworkCreate = {
    properties: {
        name: {
            type: 'string',
            isRequired: true,
        },
        l2security: {
            type: 'boolean',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
    },
};