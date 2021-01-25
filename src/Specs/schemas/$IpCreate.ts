/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $IpCreate = {
    properties: {
        family: {
            type: 'Enum',
            isRequired: true,
        },
        failover: {
            type: 'boolean',
        },
        reverse_dns: {
            type: 'string',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        name: {
            type: 'string',
        },
    },
};