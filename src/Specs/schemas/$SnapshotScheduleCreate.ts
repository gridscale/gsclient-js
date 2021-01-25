/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $SnapshotScheduleCreate = {
    properties: {
        name: {
            type: 'string',
            isRequired: true,
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        run_interval: {
            type: 'number',
            isRequired: true,
            minimum: 60,
        },
        keep_snapshots: {
            type: 'number',
            isRequired: true,
            minimum: 1,
        },
        next_runtime: {
            type: 'string',
            format: 'date-time',
        },
    },
};