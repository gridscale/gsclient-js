/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PaasServicesInNetwork = {
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
            service_template_uuid: {
                type: 'string',
                format: 'uuid',
            },
            service_template_category: {
                type: 'string',
            },
            listen_ports: {
                type: 'ListenPortsByIpIndex',
            },
        },
    },
};