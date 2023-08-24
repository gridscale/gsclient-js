/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $GPUCreateBody = {
    properties: {
        name: {
            type: 'string',
            isRequired: true,
        },
        gpu_flavor_uuid: {
            type: 'string',
            isRequired: true,
            format: 'uuid',
        },
        slices: {
            type: 'number',
            isRequired: true,
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        user_data: {
            type: 'string',
            format: 'byte',
        },
    },
};