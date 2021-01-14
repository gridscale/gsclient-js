/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type StorageBackupScheduleCreate = {
    /**
     * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    name: string;
    /**
     * The interval at which the schedule will run (in minutes). will be set from project default if not set
     */
    run_interval: number;
    /**
     * The amount of backups to keep before overwriting the last created backup., will be set from project default if not set
     */
    keep_backups: number;
    /**
     * The date and time that the backup schedule will be run. will be set from project default if not set
     */
    next_runtime: string;
    /**
     * The status of the schedule active or not. will be set true if not set
     */
    active: boolean;
}
