/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LinkNetwork = {
    properties: {
        object_uuid: {
            type: 'string',
            isRequired: true,
            format: 'uuid',
        },
        ordering: {
            type: 'number',
        },
        bootdevice: {
            type: 'boolean',
        },
        l3security: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        firewall: {
            type: 'FirewallRules',
        },
        firewall_template_uuid: {
            type: 'string',
            format: 'uuid',
        },
    },
};