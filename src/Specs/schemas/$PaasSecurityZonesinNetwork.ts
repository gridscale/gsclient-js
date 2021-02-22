/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PaasSecurityZonesinNetwork = {
    type: 'array',
    contains: {
        properties: {
            object_name: {
                type: 'string',
            },
            object_uuid: {
                type: 'string',
                format: 'uuid',
            },
            ipv6_prefix: {
                type: 'string',
            },
        },
    },
};