"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$RulesProperties = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$RulesProperties = {
    properties: {
        protocol: {
            type: 'Enum',
            isRequired: true,
        },
        dst_port: {
            properties: {},
        },
        src_port: {
            properties: {},
        },
        src_cidr: {
            type: 'string',
        },
        action: {
            type: 'Enum',
            isRequired: true,
        },
        comment: {
            type: 'string',
        },
        dst_cidr: {
            type: 'string',
        },
        order: {
            type: 'string',
            isRequired: true,
        },
    },
};

//# sourceMappingURL=$RulesProperties.js.map
