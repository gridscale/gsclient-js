"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$SshkeyCreate = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$SshkeyCreate = {
    properties: {
        name: {
            type: 'string',
            isRequired: true,
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        sshkey: {
            type: 'string',
        },
    },
};

//# sourceMappingURL=$SshkeyCreate.js.map
