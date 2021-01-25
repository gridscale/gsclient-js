/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $SnapshotScheduleUpdate = {
    properties: {
        name: {
            type: 'string',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        run_interval: {
            type: 'number',
            minimum: 1,
        },
        keep_snapshots: {
            type: 'number',
            minimum: 60,
        },
        next_runtime: {
            type: 'string',
            format: 'date-time',
        },
    },
};