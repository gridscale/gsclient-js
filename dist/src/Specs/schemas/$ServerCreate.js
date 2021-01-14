"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$ServerCreate = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$ServerCreate = {
    properties: {
        name: {
            type: 'string',
            isRequired: true,
        },
        cores: {
            type: 'number',
            isRequired: true,
        },
        memory: {
            type: 'number',
            isRequired: true,
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        status: {
            type: 'string',
        },
        availability_zone: {
            type: 'string',
        },
        auto_recovery: {
            type: 'string',
        },
        hardware_profile: {
            type: 'Enum',
        },
    },
};

//# sourceMappingURL=$ServerCreate.js.map
