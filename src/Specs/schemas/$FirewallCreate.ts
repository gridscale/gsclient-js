/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $FirewallCreate = {
    properties: {
        name: {
            type: 'string',
            isRequired: true,
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        rules: {
            type: 'FirewallRules',
            isRequired: true,
        },
    },
};