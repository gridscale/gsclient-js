"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$StorageTemplateCreate = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$StorageTemplateCreate = {
    properties: {
        name: {
            type: 'string',
            isRequired: true,
        },
        snapshot_uuid: {
            type: 'string',
            isRequired: true,
            format: 'uuid',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
    },
};

//# sourceMappingURL=$StorageTemplateCreate.js.map
