/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type LocationUpdate = {
    /**
     * The human-readable name of the object. It supports the full UTF-8 charset, with a maximum of 64 characters.
     */
    name?: string;
    /**
     * List of labels.
     */
    labels?: Array<string>;
    /**
     * The number of dedicated cpunodes to assigne to the private location.
     */
    cpunode_count?: string;
}
