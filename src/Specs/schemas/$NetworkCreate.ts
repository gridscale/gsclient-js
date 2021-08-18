/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $NetworkCreate = {
    properties: {
        name: {
            type: 'string',
            isRequired: true,
        },
        l2security: {
            type: 'boolean',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        dhcp_active: {
            type: 'boolean',
        },
        dhcp_range: {
            type: 'string',
        },
        dhcp_gateway: {
            type: 'string',
        },
        dhcp_dns: {
            type: 'string',
        },
        dhcp_reserved_subnet: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
    },
};