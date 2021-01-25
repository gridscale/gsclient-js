/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Bucket = {
    properties: {
        name: {
            type: 'string',
        },
        ussage: {
            properties: {
                size_kb: {
                    type: 'number',
                },
                num_objects: {
                    type: 'number',
                },
            },
        },
    },
};