"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$PaasServiceCreateResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$PaasServiceCreateResponse = {
    properties: {
        request_uuid: {
            type: 'string',
            format: 'uuid',
        },
        listen_ports: {
            type: 'ListenPortsByIpIndex',
        },
        paas_service_uuid: {
            type: 'string',
            format: 'uuid',
        },
        credentials: {
            type: 'PaasServiceCredentials',
        },
        object_uuid: {
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

//# sourceMappingURL=$PaasServiceCreateResponse.js.map
