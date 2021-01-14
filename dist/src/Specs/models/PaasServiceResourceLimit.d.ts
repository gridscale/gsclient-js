/**
 * A service resource limit.
 */
export declare type PaasServiceResourceLimit = {
    /**
     * The name of the resource you would like to cap.
     */
    resource?: string;
    /**
     * The maximum number of the specific resource your service can use.
     */
    limit?: number;
};
