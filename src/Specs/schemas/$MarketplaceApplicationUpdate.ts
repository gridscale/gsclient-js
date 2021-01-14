/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $MarketplaceApplicationUpdate = {
    properties: {
        name: {
            type: 'string',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        object_storage_path: {
            type: 'string',
        },
        category: {
            type: 'Enum',
        },
        publish: {
            type: 'boolean',
        },
        setup: {
            type: 'MarketplaceApplicationSetup',
        },
        metadata: {
            type: 'MarketplaceApplicationMetadata',
        },
    },
};