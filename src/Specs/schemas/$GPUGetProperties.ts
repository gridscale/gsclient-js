/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $GPUGetProperties = {
    properties: {
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        create_time: {
            type: 'string',
            format: 'date-time',
        },
        change_time: {
            type: 'string',
            format: 'date-time',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        name: {
            type: 'string',
        },
        status: {
            type: 'string',
        },
        user_data: {
            type: 'string',
            format: 'byte',
        },
        gpu_flavor_uuid: {
            type: 'string',
            format: 'uuid',
        },
        slices: {
            type: 'number',
        },
    },
};