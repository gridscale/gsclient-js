/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $StorageUpdate = {
    properties: {
        name: {
            type: 'string',
        },
        capacity: {
            type: 'string',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        storage_type: {
            type: 'Enum',
        },
    },
};