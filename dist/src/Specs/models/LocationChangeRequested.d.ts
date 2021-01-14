export declare type LocationChangeRequested = {
    /**
     * The requested number of dedicated cpunodes.
     */
    cpunode_count?: string;
    /**
     * The product number of a valid and available dedicated cpunode article.
     */
    product_no?: number;
    /**
     * The location_uuid of an existing public location in which to create the private location.
     */
    parent_location_uuid?: string;
};
