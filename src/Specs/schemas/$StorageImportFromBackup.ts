/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $StorageImportFromBackup = {
    properties: {
        backup: {
            properties: {
                name: {
                    type: 'string',
                },
                backup_uuid: {
                    type: 'string',
                    isRequired: true,
                    format: 'uuid',
                },
            },
            isRequired: true,
        },
    },
};