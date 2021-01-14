"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$IsoimageCreate = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$IsoimageCreate = {
    properties: {
        name: {
            type: 'string',
            isRequired: true,
        },
        source_url: {
            type: 'string',
            isRequired: true,
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
    },
};

//# sourceMappingURL=$IsoimageCreate.js.map
