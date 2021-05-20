/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LoadbalancerCreateBackendServers = {
    properties: {
        weight: {
            type: 'number',
            isRequired: true,
        },
        host: {
            type: 'string',
            isRequired: true,
        },
    },
};