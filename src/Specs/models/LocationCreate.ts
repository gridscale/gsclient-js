/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type LocationCreate = {
    /**
     * The human-readable name of the object. It supports the full UTF-8 charset, with a maximum of 64 characters.
     */
    name: string;
    /**
     * List of labels.
     */
    labels?: Array<string>;
    /**
     * The location_uuid of an existing public location in which to create the private location.
     */
    parent_location_uuid: string;
    /**
     * The number of dedicated cpunodes to assigne to the private location.
     */
    cpunode_count: number;
    /**
     * The product number of a valid and available dedicated cpunode article.
     */
    product_no: number;
}
