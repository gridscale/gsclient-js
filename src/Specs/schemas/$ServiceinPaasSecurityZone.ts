/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ServiceinPaasSecurityZone = {
    type: 'array',
    contains: {
        properties: {
            object_uuid: {
                type: 'string',
                format: 'uuid',
            },
            listen_ports: {
                type: 'ListenPortsByIpIndex',
            },
            name: {
                type: 'string',
            },
            service_template_uuid: {
                type: 'string',
                format: 'uuid',
            },
            credentials: {
                type: 'PaasServiceCredentials',
            },
            resources: {
                properties: {
                },
            },
            security_zone_uuid: {
                type: 'string',
                format: 'uuid',
            },
            parameters: {
                properties: {
                },
            },
        },
    },
};