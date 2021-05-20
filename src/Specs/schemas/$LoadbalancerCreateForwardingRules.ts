/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LoadbalancerCreateForwardingRules = {
    properties: {
        mode: {
            type: 'string',
            isRequired: true,
        },
        listen_port: {
            type: 'number',
            isRequired: true,
        },
        target_port: {
            type: 'number',
            isRequired: true,
        },
        letsencrypt_ssl: {
            type: 'string',
            isRequired: true,
            format: 'domain',
        },
        certificate_uuid: {
            type: 'string',
            format: 'uuid',
        },
    },
};