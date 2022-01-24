/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $StorageBackup = {
    properties: {
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        name: {
            type: 'string',
        },
        create_time: {
            type: 'string',
            format: 'date-time',
        },
        capacity: {
            type: 'number',
        },
        backup_location_uuid: {
            type: 'string',
        },
    },
};