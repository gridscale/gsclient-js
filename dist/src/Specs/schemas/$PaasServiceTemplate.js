"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$PaasServiceTemplate = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$PaasServiceTemplate = {
    properties: {
        name: {
            type: 'string',
        },
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        category: {
            type: 'string',
        },
        flavour: {
            type: 'string',
        },
        version: {
            type: 'string',
        },
        performance_class: {
            type: 'string',
        },
        version_upgrades: {
            type: 'array',
            contains: {
                type: 'string',
                format: 'uuid',
            },
        },
        performance_class_updates: {
            type: 'array',
            contains: {
                type: 'string',
                format: 'uuid',
            },
        },
        patch_updates: {
            type: 'array',
            contains: {
                type: 'string',
                format: 'uuid',
            },
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        product_no: {
            type: 'number',
        },
        discount_product_no: {
            type: 'number',
        },
        discount_period: {
            type: 'number',
        },
        resources: {
            properties: {
                memory: {
                    type: 'number',
                },
                connections: {
                    type: 'number',
                },
            },
        },
        status: {
            type: 'string',
        },
        parameters_schema: {
            type: 'PaasServiceParametersSchema',
        },
    },
};

//# sourceMappingURL=$PaasServiceTemplate.js.map
