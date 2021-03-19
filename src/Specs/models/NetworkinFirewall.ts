/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type NetworkinFirewall = Array<{
    /**
     * The mac adress of the network
     */
    mac?: string,
    /**
     * The UUID of the network you're requesting.
     */
    network_uuid?: string,
    /**
     * The type of the network.
     */
    network_type?: string,
    /**
     * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    network_name?: string,
    /**
     * The UUID of the server is always unique, and refers to a specific object.
     */
    server_uuid?: string,
    /**
     * The human-readable name of the server. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    server_name?: string,
    /**
     * The human-readable name of the firewall. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    object_name?: string,
}>;