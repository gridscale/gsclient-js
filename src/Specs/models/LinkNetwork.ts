/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { FirewallRules } from './FirewallRules';

export type LinkNetwork = {
    /**
     * The uuid of network you wish to add. Only 7 private networks are allowed to be attached to a server
     */
    object_uuid: string;
    /**
     * The ordering of the network interfaces. Lower numbers have lower PCI-IDs.
     */
    ordering?: number;
    /**
     * Whether the server boots from this network or not.
     */
    bootdevice?: boolean;
    /**
     * Defines information about IP prefix spoof protection (it allows source traffic only from the IPv4/IPv4 network prefixes). If empty, it allow no IPv4/IPv6 source traffic. If set to null, l3security is disabled (default).
     */
    l3security?: Array<string>;
    firewall?: FirewallRules;
    /**
     * The UUID of firewall template.
     */
    firewall_template_uuid?: string;
}
