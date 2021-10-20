/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $StoragesRelation = {
    properties: {
        servers: {
            type: 'ServerinStrorage',
        },
        snapshot_schedules: {
            type: 'SnapshotSchedulesinStorage',
        },
        backup_schedules: {
            type: 'BackupSchedulesinStorage',
        },
    },
};