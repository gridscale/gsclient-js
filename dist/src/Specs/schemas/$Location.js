"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$Location = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$Location = {
    properties: {
        iata: {
            type: 'string',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        name: {
            type: 'string',
            format: 'string',
        },
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        country: {
            type: 'string',
            format: 'string',
        },
        active: {
            type: 'boolean',
        },
        change_requested: {
            type: 'LocationChangeRequested',
        },
        cpunode_count: {
            type: 'number',
        },
        public: {
            type: 'boolean',
        },
        product_no: {
            type: 'number',
        },
    },
};

//# sourceMappingURL=$Location.js.map
