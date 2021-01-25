/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $SnapshotSchedule = {
    properties: {
        change_time: {
            type: 'string',
            format: 'date-time',
        },
        create_time: {
            type: 'string',
            format: 'date-time',
        },
        keep_snapshots: {
            type: 'number',
            minimum: 1,
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
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
        relations: {
            properties: {
                snapshots: {
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
    },
};