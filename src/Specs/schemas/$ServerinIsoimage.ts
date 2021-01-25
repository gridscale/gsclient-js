/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ServerinIsoimage = {
    type: 'array',
    contains: {
        properties: {
            bootdevice: {
                type: 'boolean',
            },
            create_time: {
                type: 'string',
                format: 'date-time',
            },
            object_name: {
                type: 'string',
            },
            object_uuid: {
                type: 'string',
                format: 'uuid',
            },
        },
    },
};