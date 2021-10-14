/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { CurrentUsagePerMinute } from './CurrentUsagePerMinute';
import { UsagePerInterval } from './UsagePerInterval';

export type SnapshotsUsage = {
    /**
     * List of labels.
     */
    labels?: Array<string>;
    /**
     * The UUID of an object is always unique, and refers to a specific object.
     */
    object_uuid?: string;
    /**
     * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    name?: string;
    /**
     * Status indicates the status of the object.
     */
    status?: string;
    /**
     * Defines the date and time of the last object change.
     */
    change_time?: string;
    /**
     * Defines the date and time the object was initially created.
     */
    create_time?: string;
    /**
     * The capacity of a storage/ISO-Image/template/snapshot in GB.
     */
    capacity?: number;
    /**
     * Uuid of the storage used to create this snapshot
     */
    parent_uuid?: string;
    /**
     * Name of the storage used to create this snapshot
     */
    parent_name?: string;
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
