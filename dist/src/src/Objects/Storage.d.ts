import { GridscaleObjects, RequestOptions } from './GridscaleObjects';
import { APIClass, ApiResult, GenericApiResult, VoidApiResult, CreateResult } from '../api';
import { StorageBackupScheduleCreate, StorageBackupScheduleUpdate, StorageBackupSchedule, StorageBackupIndex, StorageBackupScheduleIndex, StorageRollback } from './model/models';
declare class Storage extends GridscaleObjects {
    constructor(_api: APIClass);
    /**
     *  Clone a Storage
     *
     * @param _uuid Object UUID to Clone
     * @param _callback Callback Function
     */
    clone(_uuid: string, _callback?: Function): Promise<ApiResult<GenericApiResult>>;
    /**
     *  Snapshots
     *
     */
    /**
     *  Get Storages for this Object
     *
     * @param _uuid Object UUID
     * @param _callback Callback Function
     */
    snapshots(_uuid: string, _options?: RequestOptions, _callback?: Function): Promise<ApiResult<GenericApiResult>>;
    /**
     * Get Single Snapshot
     *
     * @param _uuid
     * @param _snapshot_uuid
     * @param _callback
     * @returns {any}
     */
    snapshot(_uuid: string, _snapshot_uuid: string, _callback?: Function): Promise<ApiResult<GenericApiResult>>;
    /**
     * Patch Snapshot
     *
     * Attribures
     *  name
     *  labels
     *
     *
     * @param _uuid
     * @param _storage_uuid
     * @param _attribute
     * @param _callback
     * @returns {any|TRequest}
     */
    patchSnapshot(_uuid: string, _snapshot_uuid: string, _attribute: Object, _callback?: Function): Promise<ApiResult<GenericApiResult>>;
    /**
     * Rollback Storage to this Snapshot
     *
     * Attribures
     *  name
     *  labels
     *
     * @param _uuid
     * @param _storage_uuid
     * @param _callback
     * @returns {any|TRequest}
     */
    rollbackSnapshot(_uuid: string, _snapshot_uuid: string, _callback?: Function): Promise<ApiResult<GenericApiResult>>;
    /**
     * Rollback Storage to this Snapshot
     *
     * Attribures
     *  - name
     *  - labels
     *
     * @param _uuid
     * @param _storage_uuid
     * @param _callback
     * @returns {any|TRequest}
     */
    exportSnapshot(_uuid: string, _snapshot_uuid: string, _data: Object, _callback?: Function): Promise<ApiResult<GenericApiResult>>;
    /**
     * Create a Snapshot of this Storage
     *
     * @param _uuid
     * @param _attribute
     * @param _callback
     * @returns {TRequest|any}
     */
    createSnapshot(_uuid: string, _attribute: Object, _callback?: Function): Promise<ApiResult<GenericApiResult>>;
    /**
     * Remove Snapshot
     *
     *
     * @param _uuid Storage UUID
     * @param _snapshot_uuid IP UUID
     * @param _callback
     * @returns {any|void|PromiseLike<void>}
     */
    removeSnapshot(_uuid: string, _snapshot_uuid: string, _callback?: Function): Promise<ApiResult<GenericApiResult>>;
    /**
     *  Snapshots Scheduler
     *
     */
    /**
     *  Get Snapshot Schedler for this Storage
     *
     * @param _uuid Object UUID
     * @param _callback Callback Function
     */
    snapshotSchedulers(_uuid: string, _options?: RequestOptions, _callback?: Function): Promise<ApiResult<GenericApiResult>>;
    /**
     * Get Single Snapshot Schedler
     *
     * @param _uuid
     * @param _snapshot_scheduler_uuid
     * @param _callback
     * @returns {any}
     */
    snapshotScheduler(_uuid: string, _snapshot_scheduler_uuid: string, _callback?: Function): Promise<ApiResult<GenericApiResult>>;
    /**
     * Patch Snapshot Schedler
     *
     *
     * @param _uuid
     * @param _snapshot_scheduler_uuid
     * @param _attribute
     * @param _callback
     * @returns {any|TRequest}
     */
    patchSnapshotScheduler(_uuid: string, _snapshot_scheduler_uuid: string, _attribute: Object, _callback?: Function): Promise<ApiResult<GenericApiResult>>;
    /**
     * Create a Snapshot Schedler for this Storage
     *
     * @param _uuid
     * @param _attribute
     * @param _callback
     * @returns {TRequest|any}
     */
    createSnapshotScheduler(_uuid: string, _attribute: Object, _callback?: Function): Promise<ApiResult<GenericApiResult>>;
    /**
     * Remove Snapshot Schedler
     *
     *
     * @param _uuid Storage UUID
     * @param _snapshot_scheduler_uuid IP UUID
     * @param _callback
     * @returns {any|void|PromiseLike<void>}
     */
    removeSnapshotScheduler(_uuid: string, _snapshot_scheduler_uuid: string, _callback?: Function): Promise<ApiResult<GenericApiResult>>;
    /**
     * List all backup schedules for the storage
     *
     * @param _uuid Storage UUID
     * @param _options requestOptions
     * @param _callback
     * @returns {TRequest|any}
     */
    backupSchedules(_uuid: string, _options?: RequestOptions, _callback?: Function): Promise<ApiResult<StorageBackupScheduleIndex>>;
    /**
     * Fetches one backup schedule
     *
     * @param _uuid Storage UUID
     * @param _backup_schedule_uuid Backup-Schedule UUID
     * @param _callback
     */
    backupScheduler(_uuid: string, _backup_schedule_uuid: string, _callback?: Function): Promise<ApiResult<StorageBackupSchedule>>;
    /**
     * Creates a new backup schedule
     *
     * @param _uuid Storage UUID
     * @param _backup_schedule_options
     * @param _callback
     */
    createBackupScheduler(_uuid: string, _backup_schedule_options: StorageBackupScheduleCreate, _callback?: Function): Promise<ApiResult<CreateResult>>;
    /**
     * Modifies existing backup schedule
     *
     * @param _uuid Storage UUID
     * @param _backup_schedule_uuid  Backup-Schedule UUID
     * @param backup_schedule_options
     * @param callback
     */
    patchBackupSchedule(_uuid: string, _backup_schedule_uuid: string, _backup_schedule_options: StorageBackupScheduleUpdate, _callback: Function): Promise<ApiResult<StorageBackupScheduleUpdate>>;
    /**
     * Remove existing backup schedule
     *
     * @param _uuid Storage UUID
     * @param _backup_schedule_uuid Backup-Schedule UUID
     * @param callback
     */
    removeStorageBackupSchedule(_uuid: string, _backup_schedule_uuid: string, _callback?: Function): Promise<ApiResult<VoidApiResult>>;
    /**
     * List all backups of the storage
     *
     * @param _uuid Storage UUID
     * @param _callback
     */
    backups(_uuid: string, _options?: RequestOptions, _callback?: Function): Promise<ApiResult<StorageBackupIndex>>;
    /**
     * Remove existing backup
     *
     * @param _uuid Storage UUID
     * @param _backup_uuid
     * @param _callback
     */
    deleteStorageBackup(_uuid: string, _backup_uuid: string, _callback?: Function): Promise<ApiResult<VoidApiResult>>;
    rollbackStorageBackup(_uuid: string, _backup_uuid: string, _attributes: StorageRollback, _callback?: Function): Promise<ApiResult<VoidApiResult>>;
    /**
     * Creates a new storage from an existing backup
     * @param _name Name of the new storage
     * @param _backup_uuid Backup-UUID to restore from
     * @param _callback
     */
    createFromBackup(_name: string, _backup_uuid: string, _callback?: Function): Promise<ApiResult<VoidApiResult>>;
}
export { Storage };
