"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$StorageImportFromBackup = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$StorageImportFromBackup = {
    properties: {
        backup: {
            properties: {
                name: {
                    type: 'string',
                },
                backup_uuid: {
                    type: 'string',
                    isRequired: true,
                    format: 'uuid',
                },
            },
            isRequired: true,
        },
    },
};

//# sourceMappingURL=$StorageImportFromBackup.js.map
