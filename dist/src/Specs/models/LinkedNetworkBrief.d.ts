export declare type LinkedNetworkBrief = {
    /**
     * (one of network, network_high, network_insane)
     */
    network_type?: string;
    /**
     * Defines information about IP prefix spoof protection (it allows source traffic only from the IPv4/IPv4 network prefixes). If empty, it allow no IPv4/IPv6 source traffic. If set to null, l3security is disabled (default).
     */
    l3security?: Array<string>;
    /**
     * Defines if this object is the bootdevice. Storages, Networks and ISO-Images can have a bootdevice configured, but only one bootdevice per Storage, Network or ISO-Image. The boot order is as follows => Network > ISO-Image > Storage.
     */
    bootdevice?: boolean;
    /**
     * The UUID of the network you're requesting.
     */
    network_uuid?: string;
    /**
     * Defines information about MAC spoofing protection (filters layer2 and ARP traffic based on MAC source). It can only be (de-)activated on a private network - the public network always has l2security enabled. It will be true if the network is public, and false if the network is private.
     */
    l2security?: boolean;
    /**
     * The UUID of the Server..
     */
    server_uuid?: string;
    /**
     * network_mac defines the MAC address of the network interface.
     */
    mac?: string;
    /**
     * Defines the ordering of the network interfaces. Lower numbers have lower PCI-IDs.
     */
    ordering?: string;
    /**
     * Firewall that is used to this server network relation
     */
    firewall?: string;
    /**
     * The UUID of firewall template.
     */
    firewall_template_uuid?: string;
    /**
     * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    object_name?: string;
    /**
     * Defines the date and time the object was initially created.
     */
    create_time?: string;
    /**
     * The UUID of an object is always unique, and refers to a specific object.
     */
    object_uuid?: string;
    /**
     * True if the network is public. If private it will be false. Each private network is a secure and fully transparent 2-Layer network between servers. There is no limit on how many servers can be connected to the same private network.
     */
    public_net?: boolean;
};
