"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$StorageBackupScheduleCreate = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$StorageBackupScheduleCreate = {
    properties: {
        name: {
            type: 'string',
            isRequired: true,
        },
        run_interval: {
            type: 'number',
            isRequired: true,
            minimum: 1,
        },
        keep_backups: {
            type: 'number',
            isRequired: true,
            minimum: 60,
        },
        next_runtime: {
            type: 'string',
            isRequired: true,
            format: 'date-time',
        },
        active: {
            type: 'boolean',
            isRequired: true,
        },
    },
};

//# sourceMappingURL=$StorageBackupScheduleCreate.js.map
