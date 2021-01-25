/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LinkedIp = {
    properties: {
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        family: {
            type: 'Enum',
        },
        prefix: {
            type: 'string',
        },
        create_time: {
            type: 'string',
            format: 'date-time',
        },
        ip: {
            type: 'string',
        },
    },
};