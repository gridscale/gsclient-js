/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PaasService = {
    properties: {
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        credentials: {
            type: 'PaasServiceCredentials',
        },
        create_time: {
            type: 'string',
            format: 'date-time',
        },
        listen_ports: {
            type: 'ListenPortsByIpIndex',
        },
        security_zone_uuid: {
            type: 'string',
            format: 'uuid',
        },
        service_template_uuid: {
            type: 'string',
            format: 'uuid',
        },
        usage_in_minutes: {
            type: 'number',
        },
        current_price: {
            type: 'number',
            format: 'float',
        },
        change_time: {
            type: 'string',
            format: 'date-time',
        },
        status: {
            type: 'string',
        },
        name: {
            type: 'string',
        },
        parameters: {
            type: 'PaasServiceParameters',
        },
        resource_limits: {
            type: 'PaasServiceResourceLimits',
        },
        upgrade_options: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
    },
};