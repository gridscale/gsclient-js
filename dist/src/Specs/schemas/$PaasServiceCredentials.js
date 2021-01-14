"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$PaasServiceCredentials = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$PaasServiceCredentials = {
    type: 'array',
    contains: {
        properties: {
            kubeconfig: {
                type: 'string',
            },
            expiration_time: {
                type: 'string',
                format: 'date-time',
            },
            password: {
                type: 'string',
            },
            username: {
                type: 'string',
            },
            type: {
                type: 'string',
                isRequired: true,
            },
        },
    },
};

//# sourceMappingURL=$PaasServiceCredentials.js.map
