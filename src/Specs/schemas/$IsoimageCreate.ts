/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $IsoimageCreate = {
    properties: {
        name: {
            type: 'string',
            isRequired: true,
        },
        source_url: {
            type: 'string',
            isRequired: true,
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
    },
};