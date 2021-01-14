"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$ServiceinPaasSecurityZone = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$ServiceinPaasSecurityZone = {
    type: 'array',
    contains: {
        properties: {
            object_uuid: {
                type: 'string',
                format: 'uuid',
            },
            listen_ports: {
                type: 'ListenPortsByIpIndex',
            },
            name: {
                type: 'string',
            },
            service_template_uuid: {
                type: 'string',
                format: 'uuid',
            },
            credentials: {
                type: 'PaasServiceCredentials',
            },
            resources: {
                properties: {},
            },
            security_zone_uuid: {
                type: 'string',
                format: 'uuid',
            },
            parameters: {
                properties: {},
            },
        },
    },
};

//# sourceMappingURL=$ServiceinPaasSecurityZone.js.map
