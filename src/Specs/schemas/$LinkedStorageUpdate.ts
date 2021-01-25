/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LinkedStorageUpdate = {
    properties: {
        ordering: {
            type: 'number',
        },
        bootdevice: {
            type: 'boolean',
        },
        l3security: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
    },
};