/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { AccumulatedUsage } from './AccumulatedUsage';
import { CurrentUsagePerMinute } from './CurrentUsagePerMinute';
import { StoragesRelation } from './StoragesRelation';
import { StorageVariant } from './StorageVariant';

export type Storage = {
    /**
     * The UUID of the Storage used to create this Snapshot.
     */
    parent_uuid?: string;
    /**
     * List of labels.
     */
    labels?: Array<string>;
    /**
     * Bakckups list in this storage.
     */
    backups?: Array<{
        /**
         * Defines the date and time the object was initially created.
         */
        create_time?: string,
        /**
         * Indicates the UUID of the last used template on this storage.
         */
        last_used_template?: string,
        /**
         * The size of the object in GB
         */
        object_capacity?: number,
        /**
         * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
         */
        object_name?: string,
        /**
         * The UUID of an object is always unique, and refers to a specific object.
         */
        object_uuid?: string,
        /**
         * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
         */
        schedules_storages_backups_name?: string,
        /**
         * The UUID of an object is always unique, and refers to a specific object.
         */
        schedules_storages_backups_uuid?: string,
        /**
         * The status of the object
         */
        status?: string,
        /**
         * The UUID of an object is always unique, and refers to a specific object.
         */
        storage_uuid?: string,
    }>;
    /**
     * Snapshots list in this storage.
     */
    snapshots?: Array<{
        /**
         * The UUID of an object is always unique, and refers to a specific object.
         */
        object_uuid?: string,
        /**
         * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
         */
        object_name?: string,
        /**
         * The size of the object in GB
         */
        object_capacity?: number,
        /**
         * The UUID of an object is always unique, and refers to a specific object.
         */
        schedules_snapshot_uuid?: string,
        /**
         * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
         */
        schedules_snapshot_name?: string,
        /**
         * Indicates the UUID of the last used template on this storage.
         */
        last_used_template?: string,
        /**
         * Defines the date and time the object was initially created.
         */
        create_time?: string,
        /**
         * The UUID of an object is always unique, and refers to a specific object.
         */
        storage_uuid?: string,
    }>;
    /**
     * The UUID of an object is always unique, and refers to a specific object.
     */
    object_uuid?: string;
    relations?: StoragesRelation;
    /**
     * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    name?: string;
    /**
     * Status indicates the status of the object.
     */
    status?: string;
    /**
     * The human-readable name of the location. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    location_country?: string;
    /**
     * Total minutes the object has been running.
     */
    usage_in_minutes?: number;
    /**
     * Helps to identify which data-center an object belongs to.
     */
    location_uuid?: string;
    /**
     * Defines the date and time of the last object change.
     */
    change_time?: string;
    /**
     * (one of storage, storage_high, storage_insane).
     */
    storage_type?: 'storage' | 'storage_high' | 'storage_insane';
    storage_variant?: StorageVariant;
    /**
     * If a template has been used that requires a license key (e.g. Windows Servers) this shows the product_no of the license (see the /prices endpoint for more details).
     */
    license_product_no?: number;
    /**
     * Deprecated
     */
    current_price?: number;
    /**
     * Defines the date and time the object was initially created.
     */
    create_time?: string;
    /**
     * Indicates the UUID of the last used template on this storage.
     */
    last_used_template?: string;
    /**
     * The capacity of a storage/ISO-Image/template/snapshot in GB.
     */
    capacity?: number;
    /**
     * The human-readable name of the location. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    location_name?: string;
    /**
     * Uses IATA airport code, which works as a location identifier.
     */
    location_iata?: string;
    current_usage_per_minute?: CurrentUsagePerMinute;
    accumulated_usage?: AccumulatedUsage;
}
