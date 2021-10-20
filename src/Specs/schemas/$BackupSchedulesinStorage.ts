/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $BackupSchedulesinStorage = {
    type: 'array',
    contains: {
        properties: {
            object_name: {
                type: 'string',
            },
            next_runtime: {
                type: 'string',
                format: 'date-time',
            },
            keep_backups: {
                type: 'number',
            },
            create_time: {
                type: 'string',
            },
            run_interval: {
                type: 'number',
            },
            object_uuid: {
                type: 'string',
                format: 'uuid',
            },
        },
    },
};