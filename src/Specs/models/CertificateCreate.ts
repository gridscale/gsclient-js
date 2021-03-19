/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CertificateCreate = {
    /**
     * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    name: string;
    /**
     * The PEM-formatted private-key of the SSL certificate.
     */
    private_key: string;
    /**
     * The PEM-formatted public SSL of the SSL certificate.
     */
    leaf_certificate: string;
    /**
     * The PEM-formatted full-chain between the certificate authority and the domain's SSL certificate.
     */
    certificate_chain?: string;
}
