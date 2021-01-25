/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $FirewallUpdate = {
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
        rules: {
            type: 'FirewallRules',
        },
    },
};