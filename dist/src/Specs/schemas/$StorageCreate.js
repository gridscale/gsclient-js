"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$StorageCreate = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$StorageCreate = {
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
            properties: {},
        },
    },
};

//# sourceMappingURL=$StorageCreate.js.map
