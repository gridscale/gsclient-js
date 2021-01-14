"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$LocationCreate = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$LocationCreate = {
    properties: {
        name: {
            type: 'string',
            isRequired: true,
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        parent_location_uuid: {
            type: 'string',
            isRequired: true,
        },
        cpunode_count: {
            type: 'number',
            isRequired: true,
        },
        product_no: {
            type: 'number',
            isRequired: true,
        },
    },
};

//# sourceMappingURL=$LocationCreate.js.map
