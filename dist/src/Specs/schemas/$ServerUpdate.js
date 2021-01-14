"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$ServerUpdate = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$ServerUpdate = {
    properties: {
        name: {
            type: 'string',
        },
        cores: {
            type: 'number',
        },
        memory: {
            type: 'number',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        availability_zone: {
            type: 'string',
        },
        auto_recovery: {
            type: 'string',
        },
    },
};

//# sourceMappingURL=$ServerUpdate.js.map
