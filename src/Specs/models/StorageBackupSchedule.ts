/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type StorageBackupSchedule = {
    /**
     * Defines the date and time of the last object change.
     */
    change_time?: string;
    /**
     * Defines the date and time the object was initially created.
     */
    create_time?: string;
    /**
     * The amount of backups to keep before overwriting the last created backup.
     */
    keep_backups?: number;
    /**
     * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    name?: string;
    /**
     * The date and time that the backup schedule will be run.
     */
    next_runtime?: string;
    /**
     * The UUID of an object is always unique, and refers to a specific object.
     */
    object_uuid?: string;
    /**
     * The Location where your backup is stored
     */
    backup_location_uuid?: string;
    /**
     * The human-readable name of backup location. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    backup_location_name?: string;
    /**
     * The UUID of an object is always unique, and refers to a specific object.
     */
    relations?: {
        storage_backups?: Array<{
            /**
             * Defines the date and time the object was initially created.
             */
            create_time?: string,
            /**
             * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
             */
            name?: string,
            object_uuid?: string,
        }>,
    };
    /**
     * The interval at which the schedule will run (in minutes)
     */
    run_interval?: number;
    /**
     * Status indicates the status of the object.
     */
    status?: string;
    /**
     * The UUID of an object is always unique, and refers to a specific object.
     */
    storage_uuid?: string;
    /**
     * Status of the schedule.
     */
    active?: boolean;
}
