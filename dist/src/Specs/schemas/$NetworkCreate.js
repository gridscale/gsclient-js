"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$NetworkCreate = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$NetworkCreate = {
    properties: {
        name: {
            type: 'string',
            isRequired: true,
        },
        l2security: {
            type: 'boolean',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
    },
};

//# sourceMappingURL=$NetworkCreate.js.map
