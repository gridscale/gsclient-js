/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PaasServiceCredentials = {
    type: 'array',
    contains: {
        properties: {
            kubeconfig: {
                type: 'string',
            },
            expiration_time: {
                type: 'string',
                format: 'date-time',
            },
            password: {
                type: 'string',
            },
            username: {
                type: 'string',
            },
            type: {
                type: 'string',
                isRequired: true,
            },
        },
    },
};