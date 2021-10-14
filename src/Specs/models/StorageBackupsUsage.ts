/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { CurrentUsagePerMinute } from './CurrentUsagePerMinute';
import { UsagePerInterval } from './UsagePerInterval';

export type StorageBackupsUsage = {
    /**
     * The UUID of a backup is always unique, and refers to a specific object.
     */
    object_uuid?: string;
    /**
     * The name of the backup equals schedule name plus backup uuid.
     */
    name?: string;
    /**
     * Defines the date and time the object was initially created.
     */
    create_time?: string;
    /**
     * Defines the date and time when the last time the object was updated.
     */
    change_time?: string;
    current_usage_per_minute?: CurrentUsagePerMinute;
    usage_per_interval?: UsagePerInterval;
}
