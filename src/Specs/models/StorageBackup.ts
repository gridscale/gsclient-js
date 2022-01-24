/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type StorageBackup = {
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
     * The size of a backup in GB.
     */
    capacity?: number;
    /**
     * UUID of the location the backup resides.
     */
    backup_location_uuid?: string;
}
