/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { CurrentUsagePerMinute } from './CurrentUsagePerMinute';
import { UsagePerInterval } from './UsagePerInterval';

export type IpsUsage = {
    /**
     * Defines the date and time the object was initially created.
     */
    create_time?: string;
    /**
     * Status indicates the status of the object.
     */
    status?: string;
    /**
     * The UUID of an object is always unique, and refers to a specific object.
     */
    object_uuid?: string;
    /**
     * The human-readable name of the location. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    location_country?: string;
    /**
     * The IP prefix.
     */
    prefix?: string;
    /**
     * Defines if the object is administratively blocked. If true, it can not be deleted by the user.
     */
    delete_block?: boolean;
    /**
     * Sets failover mode for this IP. If true, then this IP is no longer available for DHCP and can no longer be related to any server.
     */
    failover?: boolean;
    /**
     * Helps to identify which data-center an object belongs to.
     */
    location_uuid?: string;
    /**
     * The human-readable name of the location. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    location_name?: string;
    /**
     * Uses IATA airport code, which works as a location identifier.
     */
    location_iata?: string;
    /**
     * List of labels.
     */
    labels?: Array<string>;
    /**
     * Defines the date and time of the last object change.
     */
    change_time?: string;
    /**
     * Defines the IP Address (v4 or v6).
     */
    ip?: string;
    /**
     * The IP Address family (v4 or v6).
     */
    family?: 4 | 6;
    /**
     * Defines the reverse DNS entry for the IP Address (PTR Resource Record).
     */
    reverse_dns?: string;
    /**
     * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    name?: string;
    /**
     * The UUID of the Storage used to create this Snapshot.
     */
    partner_uuid?: string;
    /**
     * Uuid of the project used to create this object
     */
    project_uuid?: string;
    /**
     * The deleted status of the object.
     */
    deleted?: boolean;
    current_usage_per_minute?: CurrentUsagePerMinute;
    usage_per_interval?: UsagePerInterval;
}
