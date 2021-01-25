/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A service resource limit.
 */
export type PaasServiceResourceLimit = {
    /**
     * The name of the resource you would like to cap.
     */
    resource?: string;
    /**
     * The maximum number of the specific resource your service can use.
     */
    limit?: number;
}
