/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ServerRelation } from './ServerRelation';

export type Server = {
    /**
     * Number of server cores.
     */
    cores?: number;
    relations?: ServerRelation;
    /**
     * Legacy-Hardware emulation instead of virtio hardware. If enabled, hotplugging cores, memory, storage, network, etc. will not work, but the server will most likely run every x86 compatible operating system. This mode comes with a performance penalty, as emulated hardware does not benefit from the virtio driver infrastructure.
     */
    legacy?: boolean;
    /**
     * Indicates the amount of memory in GB.
     */
    memory?: number;
    /**
     * The token used by the panel to open the websocket VNC connection to the server console.
     */
    console_token?: string;
    /**
     * Total minutes of memory used.
     */
    usage_in_minutes_memory?: number;
    /**
     * If the server should be auto-started in case of a failure (default=true).
     */
    auto_recovery?: boolean;
    /**
     * Defines the date and time the object was initially created.
     */
    create_time?: string;
    /**
     * Deprecated
     */
    current_price?: number;
    /**
     * The human-readable name of the location. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    location_country?: string;
    /**
     * Helps to identify which data-center an object belongs to.
     */
    location_uuid?: string;
    /**
     * Total minutes of cores used.
     */
    usage_in_minutes_cores?: number;
    /**
     * The UUID of an object is always unique, and refers to a specific object.
     */
    object_uuid?: string;
    /**
     * Defines the date and time of the last object change.
     */
    change_time?: string;
    /**
     * Which Availability-Zone the Server is placed.
     */
    availability_zone?: string;
    /**
     * Uses IATA airport code, which works as a location identifier.
     */
    location_iata?: string;
    /**
     * List of labels.
     */
    labels?: Array<string>;
    /**
     * Specifies the hardware settings for the virtual machine.
     */
    hardware_profile?: string;
    /**
     * The human-readable name of the location. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    location_name?: string;
    /**
     * The power status of the server.
     */
    power?: boolean;
    /**
     * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    name?: string;
    /**
     * Status indicates the status of the object, e.g., in-provisioning or active.
     */
    status?: string;
}
