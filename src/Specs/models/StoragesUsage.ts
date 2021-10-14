/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { CurrentUsagePerMinute } from './CurrentUsagePerMinute';
import { UsagePerInterval } from './UsagePerInterval';

export type StoragesUsage = {
    /**
     * The UUID of the Storage used to create this Snapshot.
     */
    parent_uuid?: string;
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
     * The deleted status of the object.
     */
    deleted?: boolean;
    /**
     * Status indicates the status of the object.
     */
    status?: string;
    /**
     * (one of storage, storage_high, storage_insane).
     */
    storage_type?: 'storage' | 'storage_high' | 'storage_insane';
    /**
     * Indicates the UUID of the last used template on this storage.
     */
    last_used_template?: string;
    /**
     * The capacity of a storage/ISO-Image/template/snapshot in GB.
     */
    capacity?: number;
    current_usage_per_minute?: CurrentUsagePerMinute;
    usage_per_interval?: UsagePerInterval;
}
