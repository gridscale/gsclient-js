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
    /**
     * Set if dhcp is supposed to be active on the new network
     */
    dhcp_active?: boolean;
    /**
     * The general IP Range configured for this network (/24 for private networks). If None will default to our internal default range for either
     */
    dhcp_range?: string;
    /**
     * The ip reserved and communicated by the dhcp service to be the default gateway If none, will default to the first adress in the defined (or default) range
     */
    dhcp_gateway?: string;
    /**
     * The ip reserved and communicated by the dhcp service to be the default gateway If none, will default to the first adress in the defined (or default) range
     */
    dhcp_dns?: string;
    /**
     * Any subrange within the ip range not conflicting with gateway or dns address, not used for automatic assignment of IPs
     */
    dhcp_reserved_subnet?: Array<string>;
}
