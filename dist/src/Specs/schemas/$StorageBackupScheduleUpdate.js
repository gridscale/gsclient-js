"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$StorageBackupScheduleUpdate = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$StorageBackupScheduleUpdate = {
    properties: {
        name: {
            type: 'string',
        },
        run_interval: {
            type: 'number',
            minimum: 1,
        },
        keep_backups: {
            type: 'number',
            minimum: 60,
        },
        next_runtime: {
            type: 'string',
            format: 'date-time',
        },
        active: {
            type: 'boolean',
        },
    },
};

//# sourceMappingURL=$StorageBackupScheduleUpdate.js.map
