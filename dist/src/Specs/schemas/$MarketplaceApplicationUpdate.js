"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$MarketplaceApplicationUpdate = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$MarketplaceApplicationUpdate = {
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

//# sourceMappingURL=$MarketplaceApplicationUpdate.js.map
