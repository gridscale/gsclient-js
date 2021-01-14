export declare type IpCreate = {
    /**
     * Defines the IP Address family (v4 or v6).
     */
    family: IpCreate.family;
    /**
     * Sets failover mode for this IP. If true, then this IP is no longer available for DHCP and can no longer be related to any server.
     */
    failover?: boolean;
    /**
     * Defines the reverse DNS entry for the IP Address (PTR Resource Record).
     */
    reverse_dns?: string;
    /**
     * List of labels.
     */
    labels?: Array<string>;
    /**
     * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    name?: string;
};
export declare namespace IpCreate {
    /**
     * Defines the IP Address family (v4 or v6).
     */
    enum family {
        _4 = 4,
        _6 = 6
    }
}