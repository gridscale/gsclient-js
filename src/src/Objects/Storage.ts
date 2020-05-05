import {GridscaleObjects, RequestOptions} from './GridscaleObjects';

interface StorageBackupSchedule {
    /**
     * The human-readable name of the object. It supports the full UTF-8 charset, with a maximum of 64 characters
     */
    name: string, 
    type: string,
    /**
     * The interval at which the schedule will run (in minutes). will be set from project default if not set
     * minimum: 1
     */
    run_interval: number, 
    /**
     * The amount of backups to keep before overwriting the last created backup., will be set from project default if not set
     * minimum: 60
     */
    keep_backups: number,
    /**
     * The date and time that the backup schedule will be run. will be set from project default if not set
     * format: date-time
     */
    next_runtime: string
    /**
     * The status of the schedule active or not. will be set true if not set
     */
    active: boolean
    /**
     * List of labels.
     */
    labels: string[]
}

class Storage extends GridscaleObjects {

    constructor(_api) {
        super(_api, '/objects/storages');
    }


    /**
     *  Clone a Storage
     *
     * @param _uuid Object UUID to Clone
     * @param _callback Callback Function
     */
    clone(_uuid, _callback?) {
      return this._api.post(  this._basepath +'/'+ _uuid + '/clone' ,_callback);
    }


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
    snapshots(_uuid, _options?, _callback?) {
        return this._sub('snapshots', _uuid, _options, _callback);
    }


    /**
     * Get Single Snapshot
     *
     * @param _uuid
     * @param _snapshot_uuid
     * @param _callback
     * @returns {any}
     */
    snapshot(_uuid, _snapshot_uuid, _callback?) {
        return this._sub_get('snapshots', _uuid, _snapshot_uuid, _callback);
    }


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
    patchSnapshot(_uuid, _snapshot_uuid, _attribute, _callback?) {
        return this._sub_patch('snapshots', _uuid, _snapshot_uuid, _attribute, _callback);
    }

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
    rollbackSnapshot(_uuid, _snapshot_uuid, _callback?) {
        return this._api.patch( '/objects/storages/' + _uuid +'/snapshots/' + _snapshot_uuid + '/rollback' , {rollback: true} ,_callback);
    }



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
    exportSnapshot(_uuid, _snapshot_uuid,_data, _callback?) {
      return this._api.patch( '/objects/storages/' + _uuid +'/snapshots/' + _snapshot_uuid + '/export_to_s3' , _data ,_callback);
    }


    /**
     * Create a Snapshot of this Storage
     *
     * @param _uuid
     * @param _attribute
     * @param _callback
     * @returns {TRequest|any}
     */
    createSnapshot(_uuid, _attribute, _callback?) {
        return this._sub_post('snapshots', _uuid, _attribute, _callback);
    }


    /**
     * Remove Snapshot
     *
     *
     * @param _uuid Storage UUID
     * @param _snapshot_uuid IP UUID
     * @param _callback
     * @returns {any|void|PromiseLike<void>}
     */
    removeSnapshot(_uuid, _snapshot_uuid, _callback?) {
        return this._sub_remove('snapshots', _uuid, _snapshot_uuid, _callback);
    }


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
    snapshotSchedulers(_uuid, _options?, _callback?) {
        return this._sub('snapshot_schedules', _uuid, _options, _callback);
    }


    /**
     * Get Single Snapshot Schedler
     *
     * @param _uuid
     * @param _snapshot_scheduler_uuid
     * @param _callback
     * @returns {any}
     */
    snapshotScheduler(_uuid, _snapshot_scheduler_uuid, _callback?) {
        return this._sub_get('snapshot_schedules', _uuid, _snapshot_scheduler_uuid, _callback);
    }


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
    patchSnapshotScheduler(_uuid, _snapshot_scheduler_uuid, _attribute, _callback?) {
        return this._sub_patch('snapshot_schedules', _uuid, _snapshot_scheduler_uuid, _attribute, _callback);
    }


    /**
     * Create a Snapshot Schedler for this Storage
     *
     * @param _uuid
     * @param _attribute
     * @param _callback
     * @returns {TRequest|any}
     */
    createSnapshotScheduler(_uuid, _attribute, _callback?) {
        return this._sub_post('snapshot_schedules', _uuid, _attribute, _callback);
    }


    /**
     * Remove Snapshot Schedler
     *
     *
     * @param _uuid Storage UUID
     * @param _snapshot_scheduler_uuid IP UUID
     * @param _callback
     * @returns {any|void|PromiseLike<void>}
     */
    removeSnapshotScheduler(_uuid, _snapshot_scheduler_uuid, _callback?) {
        return this._sub_remove('snapshot_schedules', _uuid, _snapshot_scheduler_uuid, _callback);
    }

    /**
     * List all backup schedules for the storage
     * 
     * @param _uuid Storage UUID
     * @param _options requestOptions
     * @param _callback 
     * @returns {TRequest|any}
     */
    backupSchedules(_uuid: string, _options?: RequestOptions, _callback?: Function) {
        return this._sub('backup_schedules', _uuid, _options, _callback);
    }

    /**
     * Fetches one backup schedule
     * 
     * @param _uuid Storage UUID
     * @param _backup_schedule_uuid Backup-Schedule UUID
     * @param _callback 
     */
    backupSchedule(_uuid: string, _backup_schedule_uuid: string, _callback?: Function) {
        return this._sub_get('backup_schedules', _uuid, _backup_schedule_uuid, _callback);
    }

    /**
     * Creates a new backup schedule
     * 
     * @param _uuid Storage UUID
     * @param _backup_schedule_options 
     * @param _callback 
     */
    createBackupSchedule(_uuid: string, _backup_schedule_options: StorageBackupSchedule, _callback?: Function) {
        return this._sub_post('backup_schedules', _uuid, _backup_schedule_options, _callback);
    }

    /**
     * Modifies existing backup schedule
     * 
     * @param _uuid Storage UUID
     * @param _backup_schedule_uuid  Backup-Schedule UUID
     * @param backup_schedule_options 
     * @param callback 
     */
    patchBackupSchedule(_uuid: string, _backup_schedule_uuid: string, _backup_schedule_options: StorageBackupSchedule, _callback: Function) {
        return this._sub_patch('backup_schedules', _uuid, _backup_schedule_uuid, _backup_schedule_options, _callback);
    }

    /**
     * Remove existing backup schedule
     * 
     * @param _uuid Storage UUID
     * @param _backup_schedule_uuid Backup-Schedule UUID
     * @param callback 
     */
    removeBackupSchedule(_uuid: string, _backup_schedule_uuid: string, _callback?: Function) {
        return this._sub_remove('backup_schedules', _uuid, _backup_schedule_uuid, _callback);
    }

    /**
     * List all backups of the storage
     * 
     * @param _uuid Storage UUID
     * @param _callback 
     */
    backups(_uuid: string, _options?: RequestOptions, _callback?: Function) {
        return this._sub('backups', _uuid, _options, _callback);
    }

    /**
     * Remove existing backup
     * 
     * @param _uuid Storage UUID
     * @param _backup_uuid 
     * @param _callback 
     */
    removeBackup(_uuid: string, _backup_uuid: string, _callback?: Function) {
        return this._sub_remove('backups', _uuid, _backup_uuid, _callback);
    }

    /**
     * Creates a new storage from an existing backup
     * @param _name Name of the new storage
     * @param _backup_uuid Backup-UUID to restore from
     * @param _callback 
     */
    createFromBackup(_name: string, _backup_uuid: string, _callback?: Function) {
        return this._api.post(this._basepath + '/import/', {
            name: _name,
            backup_uuid: _backup_uuid
        }, _callback);
    }


}
export { Storage }
