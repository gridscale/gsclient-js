"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$PaasServiceUpdate = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$PaasServiceUpdate = {
    properties: {
        name: {
            type: 'string',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        parameters: {
            type: 'PaasServiceParameters',
        },
        resource_limits: {
            type: 'PaasServiceResourceLimits',
        },
        paas_service_template_uuid: {
            type: 'string',
            format: 'uuid',
        },
    },
};

//# sourceMappingURL=$PaasServiceUpdate.js.map
