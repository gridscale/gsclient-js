/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $StorageBackupScheduleUpdate = {
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