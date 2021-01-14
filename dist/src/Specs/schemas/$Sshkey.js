"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$Sshkey = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$Sshkey = {
    properties: {
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        user_uuid: {
            type: 'string',
            format: 'uuid',
        },
        create_time: {
            type: 'string',
            format: 'date-time',
        },
        status: {
            type: 'string',
        },
        change_time: {
            type: 'string',
            format: 'date-time',
        },
        name: {
            type: 'string',
        },
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        sshkey: {
            type: 'string',
        },
    },
};

//# sourceMappingURL=$Sshkey.js.map
