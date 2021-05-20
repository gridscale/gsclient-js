/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type LoadbalancerCreateBackendServers = {
    /**
     * The backend host weight
     */
    weight: number;
    /**
     * A valid domain or an IP address of a server
     */
    host: string;
}
