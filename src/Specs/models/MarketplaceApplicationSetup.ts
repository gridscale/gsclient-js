/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Application's setup, consist the number of resource for creating the application
 */
export type MarketplaceApplicationSetup = {
    /**
     * Number of server cores.
     */
    cores?: number;
    /**
     * Number of server memory.
     */
    memory?: number;
    /**
     * The capacity of a storage in GB.
     */
    capacity?: number;
}
