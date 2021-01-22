/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type NetworkUpdate = {
    /**
     * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    name?: string;
    /**
     * Defines information about MAC spoofing protection (filters layer2 and ARP traffic based on MAC source). It can only be (de-)activated on a private network - the public network always has l2security enabled. It will be true if the network is public, and false if the network is private.
     */
    l2security?: boolean;
    /**
     * List of labels.
     */
    labels?: Array<string>;
}
