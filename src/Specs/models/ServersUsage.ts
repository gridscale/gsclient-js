/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { CurrentUsagePerMinute } from './CurrentUsagePerMinute';
import { UsagePerInterval } from './UsagePerInterval';

export type ServersUsage = {
    /**
     * Number of server cores.
     */
    cores?: number;
    /**
     * Indicates the amount of memory in GB.
     */
    memory?: number;
    /**
     * The UUID of an object is always unique, and refers to a specific object.
     */
    object_uuid?: string;
    /**
     * List of labels.
     */
    labels?: Array<string>;
    /**
     * The power status of the server.
     */
    power?: boolean;
    /**
     * The deleted status of the object.
     */
    deleted?: boolean;
    /**
     * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    name?: string;
    /**
     * Status indicates the status of the object, e.g., in-provisioning or active.
     */
    status?: string;
    current_usage_per_minute?: CurrentUsagePerMinute;
    usage_per_interval?: UsagePerInterval;
}
