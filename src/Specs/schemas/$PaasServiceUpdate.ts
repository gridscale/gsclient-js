/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PaasServiceUpdate = {
    properties: {
        name: {
            type: 'string',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        parameters: {
            type: 'PaasServiceParameters',
        },
        resource_limits: {
            type: 'PaasServiceResourceLimits',
        },
        network_uuid: {
            type: 'string',
            format: 'uuid',
        },
        service_template_uuid: {
            type: 'string',
            format: 'uuid',
        },
    },
};