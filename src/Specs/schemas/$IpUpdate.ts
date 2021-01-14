/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $IpUpdate = {
    properties: {
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