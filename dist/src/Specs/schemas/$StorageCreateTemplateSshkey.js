"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$StorageCreateTemplateSshkey = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$StorageCreateTemplateSshkey = {
    properties: {
        template_uuid: {
            type: 'string',
            isRequired: true,
            format: 'uuid',
        },
        hostname: {
            type: 'string',
        },
        sshkeys: {
            type: 'array',
            contains: {
                type: 'string',
            },
            isRequired: true,
        },
    },
};

//# sourceMappingURL=$StorageCreateTemplateSshkey.js.map
