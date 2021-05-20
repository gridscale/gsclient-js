/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type LoadbalancerCreateForwardingRules = {
    /**
     * Supports HTTP and TCP mode
     */
    mode: string;
    /**
     * Specifies the entry port of the load balancer
     */
    listen_port: number;
    /**
     * Specifies the exit port that the load balancer uses to forward the traffic to the backend server
     */
    target_port: number;
    /**
     * A valid domain name that points to the loadbalancer's IP address
     */
    letsencrypt_ssl: string;
    /**
     * The UUID of a custom certificate
     */
    certificate_uuid?: string;
}
