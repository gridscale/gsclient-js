/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ServerinNetwork = Array<{
    /**
     * Whether the server boots from this iso image or not.
     */
    bootdevice?: boolean,
    /**
     * Defines the date and time the object was initially created.
     */
    create_time?: string,
    /**
     * Defines information about IP prefix spoof protection (it allows source traffic only from the IPv4/IPv4 network prefixes). If empty, it allow no IPv4/IPv6 source traffic. If set to null, l3security is disabled (default).
     */
    l3security?: Array<string>,
    /**
     * network_mac defines the MAC address of the network interface.
     */
    mac?: string,
    /**
     * The UUID of the network you're requesting.
     */
    network_uuid?: string,
    /**
     * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    object_name?: string,
    /**
     * The UUID of an object is always unique, and refers to a specific object.
     */
    object_uuid?: string,
    /**
     * The ordering of the network interfaces. Lower numbers have lower PCI-IDs.
     */
    ordering?: number,
}>;