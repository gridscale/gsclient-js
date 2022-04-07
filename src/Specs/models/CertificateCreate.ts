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
     * The PEM-formatted full-chain between the certificate authority and the domain's SSL certificate. The certificate_chain should include the leaf_certificate as well. The certificate_chain should include the certificates in the following order: -----BEGIN CERTIFICATE-----\ncontent of your domain certificate (leaf certificate)\n-----END CERTIFICATE----- \n-----BEGIN CERTIFICATE-----\ncontent of any intermediate CA certificate\n-----END CERTIFICATE---- \n-----BEGIN CERTIFICATE-----\ncontent of CA certificate\n-----END CERTIFICATE----
     */
    certificate_chain?: string;
}
