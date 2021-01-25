/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PaasServiceCreate = {
    properties: {
        name: {
            type: 'string',
            isRequired: true,
        },
        paas_service_template_uuid: {
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
        paas_security_zone_uuid: {
            type: 'string',
            format: 'uuid',
        },
        parameters: {
            type: 'PaasServiceParameters',
        },
        resource_limits: {
            type: 'PaasServiceResourceLimits',
        },
    },
};