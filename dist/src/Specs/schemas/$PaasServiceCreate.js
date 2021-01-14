"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$PaasServiceCreate = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$PaasServiceCreate = {
    properties: {
        name: {
            type: 'string',
            isRequired: true,
        },
        paas_service_template_uuid: {
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
        paas_security_zone_uuid: {
            type: 'string',
            format: 'uuid',
        },
        parameters: {
            type: 'PaasServiceParameters',
        },
        resource_limits: {
            type: 'PaasServiceResourceLimits',
        },
    },
};

//# sourceMappingURL=$PaasServiceCreate.js.map
