/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $MarketplaceApplicationCreate = {
    properties: {
        name: {
            type: 'string',
            isRequired: true,
        },
        object_storage_path: {
            type: 'string',
            isRequired: true,
        },
        category: {
            type: 'Enum',
        },
        publish: {
            type: 'boolean',
        },
        setup: {
            properties: {
                cores: {
                    type: 'number',
                    isRequired: true,
                    maximum: 64,
                    minimum: 1,
                },
                memory: {
                    type: 'number',
                    isRequired: true,
                    maximum: 192,
                    minimum: 1,
                },
                capacity: {
                    type: 'number',
                    isRequired: true,
                    maximum: 16384,
                    minimum: 1,
                },
            },
            isRequired: true,
        },
        metadata: {
            type: 'MarketplaceApplicationMetadata',
        },
    },
};