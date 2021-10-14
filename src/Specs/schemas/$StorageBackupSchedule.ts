/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $StorageBackupSchedule = {
    properties: {
        change_time: {
            type: 'string',
            format: 'date-time',
        },
        create_time: {
            type: 'string',
            format: 'date-time',
        },
        keep_backups: {
            type: 'number',
            minimum: 1,
        },
        name: {
            type: 'string',
        },
        next_runtime: {
            type: 'string',
            format: 'date-time',
        },
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        backup_location_uuid: {
            type: 'string',
            format: 'uuid',
        },
        backup_location_name: {
            type: 'string',
        },
        relations: {
            properties: {
                storages_backups: {
                    type: 'array',
                    contains: {
                        properties: {
                            create_time: {
                                type: 'string',
                                format: 'date-time',
                            },
                            name: {
                                type: 'string',
                            },
                            object_uuid: {
                                type: 'string',
                            },
                        },
                    },
                },
            },
        },
        run_interval: {
            type: 'number',
            minimum: 1,
        },
        status: {
            type: 'string',
        },
        storage_uuid: {
            type: 'string',
            format: 'uuid',
        },
        active: {
            type: 'boolean',
        },
    },
};