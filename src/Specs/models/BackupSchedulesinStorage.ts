/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type BackupSchedulesinStorage = Array<{
    /**
     * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    object_name?: string,
    /**
     * The date and time that the backup schedule will be run.
     */
    next_runtime?: string,
    /**
     * The amount of Backups to keep before overwriting the last created Backup.
     */
    keep_backups?: number,
    /**
     * Defines the date and time the object was initially created.
     */
    create_time?: string,
    /**
     * The interval at which the schedule will run (in seconds)
     */
    run_interval?: number,
    /**
     * The UUID of an object is always unique, and refers to a specific object.
     */
    object_uuid?: string,
}>;