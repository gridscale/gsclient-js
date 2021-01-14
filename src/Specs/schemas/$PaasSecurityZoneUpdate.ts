/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PaasSecurityZoneUpdate = {
    properties: {
        name: {
            type: 'string',
        },
        location_uuid: {
            type: 'string',
            format: 'uuid',
        },
        paas_security_zone_uuid: {
            type: 'string',
            format: 'uuid',
        },
    },
};