/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $StorageTemplateCreate = {
    properties: {
        name: {
            type: 'string',
            isRequired: true,
        },
        snapshot_uuid: {
            type: 'string',
            isRequired: true,
            format: 'uuid',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
    },
};