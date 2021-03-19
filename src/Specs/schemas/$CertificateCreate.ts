/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CertificateCreate = {
    properties: {
        name: {
            type: 'string',
            isRequired: true,
        },
        private_key: {
            type: 'string',
            isRequired: true,
        },
        leaf_certificate: {
            type: 'string',
            isRequired: true,
        },
        certificate_chain: {
            type: 'string',
        },
    },
};