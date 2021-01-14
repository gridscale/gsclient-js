"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$StorageCreateTemplatePassword = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$StorageCreateTemplatePassword = {
    properties: {
        template_uuid: {
            type: 'string',
            isRequired: true,
            format: 'uuid',
        },
        hostname: {
            type: 'string',
        },
        password: {
            type: 'string',
            isRequired: true,
        },
        password_type: {
            type: 'Enum',
            isRequired: true,
        },
    },
};

//# sourceMappingURL=$StorageCreateTemplatePassword.js.map
