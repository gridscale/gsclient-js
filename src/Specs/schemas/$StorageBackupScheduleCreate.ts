/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $StorageBackupScheduleCreate = {
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