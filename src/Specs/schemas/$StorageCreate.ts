/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $StorageCreate = {
    properties: {
        name: {
            type: 'string',
            isRequired: true,
        },
        capacity: {
            type: 'number',
            isRequired: true,
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        storage_type: {
            type: 'StorageType',
        },
        storage_variant: {
            type: 'StorageVariant',
        },
        template: {
            properties: {
            },
        },
    },
};