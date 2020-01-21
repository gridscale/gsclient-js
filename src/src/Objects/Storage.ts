import {GridscaleObjects} from './GridscaleObjects';


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
     * @param _uuid Server UUID
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
     * @param _uuid Server UUID
     * @param _snapshot_scheduler_uuid IP UUID
     * @param _callback
     * @returns {any|void|PromiseLike<void>}
     */
    removeSnapshotScheduler(_uuid, _snapshot_scheduler_uuid, _callback?) {
        return this._sub_remove('snapshot_schedules', _uuid, _snapshot_scheduler_uuid, _callback);
    }


}
export { Storage }
