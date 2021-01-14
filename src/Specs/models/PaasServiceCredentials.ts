/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Contains the initial setup credentials for Service. The properties depend on the Service type
 */
export type PaasServiceCredentials = Array<{
    /**
     * The kubeconfig of the gsk Service.
     */
    kubeconfig?: string,
    /**
     * The kubeconfig's expiration time of the gsk Service
     */
    expiration_time?: string,
    /**
     * The initial username to authenticate the Service.
     */
    password?: string,
    /**
     * The initial password to authenticate the Service.
     */
    username?: string,
    /**
     * The type of Service.
     */
    type: string,
}>;