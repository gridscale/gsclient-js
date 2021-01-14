/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NetworkRelation } from './NetworkRelation';

export type Network = {
    /**
     * The human-readable name of the location. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    location_country?: string;
    /**
     * Helps to identify which data-center an object belongs to.
     */
    location_uuid?: string;
    /**
     * True if the network is public. If private it will be false. Each private network is a secure and fully transparent 2-Layer network between servers. There is no limit on how many servers can be connected to the same private network.
     */
    public_net?: boolean;
    /**
     * The UUID of an object is always unique, and refers to a specific object.
     */
    object_uuid?: string;
    /**
     * One of 'network', 'network_high' or 'network_insane'.
     */
    network_type?: string;
    /**
     * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    name?: string;
    /**
     * Defines if the object is administratively blocked. If true, it can not be deleted by the user.
     */
    delete_block?: boolean;
    /**
     * Status indicates the status of the object.
     */
    status?: string;
    /**
     * Defines the date and time the object was initially created.
     */
    create_time?: string;
    /**
     * Defines information about MAC spoofing protection (filters layer2 and ARP traffic based on MAC source). It can only be (de-)activated on a private network - the public network always has l2security enabled. It will be true if the network is public, and false if the network is private.
     */
    l2security?: boolean;
    relations?: NetworkRelation;
    /**
     * List of labels.
     */
    labels?: Array<string>;
    /**
     * Defines the date and time of the last object change.
     */
    change_time?: string;
    /**
     * Uses IATA airport code, which works as a location identifier.
     */
    location_iata?: string;
    /**
     * The human-readable name of the location. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    location_name?: string;
}
