"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$ServerCreateResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$ServerCreateResponse = {
    properties: {
        server_uuid: {
            type: 'string',
            format: 'uuid',
        },
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        request_uuid: {
            type: 'string',
            format: 'uuid',
        },
        network_uuids: {
            type: 'array',
            contains: {
                type: 'string',
                format: 'uuid',
            },
        },
        storage_uuids: {
            type: 'array',
            contains: {
                type: 'string',
                format: 'uuid',
            },
        },
        ipaddr_uuids: {
            type: 'array',
            contains: {
                type: 'string',
                format: 'uuid',
            },
        },
    },
};

//# sourceMappingURL=$ServerCreateResponse.js.map
