export declare type IpUpdate = {
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
