

import { GridscaleObjects } from './GridscaleObjects';
import { APIClass, ApiResult, GenericApiResult, RequestOptions } from '../api';
import { assignIn } from 'lodash';
import { ServerIndex } from './model/models';


class Server extends GridscaleObjects {

    constructor(_api: APIClass) { super(_api, '/objects/servers', 'servers', 'server'); }


    /**
     * Start/Stop Server
     *
     * @param _uuid
     * @param _power
     * @param _callback
     * @returns {any|TRequest}
     */
    power(_uuid: string, _power: Boolean, _callback?: Function): Promise<ApiResult<GenericApiResult>> {
        return this._api.patch(  this._basepath + '/' + _uuid + '/power' , { power : _power } , _callback );
    }

    /**
     * Send ACPI-Shutdown to User
     *
     * @param _uuid
     * @param _callback
     * @returns {any|TRequest}
     */
    shutdown(_uuid: string, _callback?: Function): Promise<ApiResult<GenericApiResult>> {
        return this._api.patch(  this._basepath + '/' + _uuid + '/shutdown' , {} , _callback );
    }

    /**
     *  IP Adress Handling
     *
     */


    /**
     *  Get IPs for this Object
     *
     * @param _uuid Object UUID
     * @param _callback Callback Function
     */
    ips(_uuid: string, _options?: RequestOptions, _callback?: Function): Promise<ApiResult<GenericApiResult>> {
        return this._sub('ips', _uuid, _options, _callback);
    }

    /**
     * Get IP that is in Relation with Server
     *
     * @param _uuid
     * @param _ip_uuid
     * @param _callback
     * @returns {any}
     */
    ip(_uuid: string, _ip_uuid: string, _callback?: Function): Promise<ApiResult<GenericApiResult>> {
        return this._sub_get('ips', _uuid, _ip_uuid, _callback);
    }


    /**
     * Relate an IP with the Server
     *
     * @param _uuid Server UUID
     * @param _ip_uuid IP UUID
     * @param _callback  Callback Function
     * @returns {TRequest|any}
     */
    addIp(_uuid: string, _ip_uuid: string, _callback?: Function): Promise<ApiResult<GenericApiResult>> {
        return this._sub_post('ips', _uuid, {'object_uuid': _ip_uuid}, _callback);
    }


    /**
     * Remove IP-Adress from Server
     *
     *
     * @param _uuid Server UUID
     * @param _ip_uuid IP UUID
     * @param _callback
     * @returns {any|void|PromiseLike<void>}
     */
    removeIp(_uuid: string, _ip_uuid: string, _callback?: Function): Promise<ApiResult<GenericApiResult>> {
        return this._sub_remove('ips', _uuid, _ip_uuid, _callback);
    }


    /**
     *  Storages
     *
     */


    /**
     *  Get Storages for this Object
     *
     * @param _uuid Object UUID
     * @param _callback Callback Function
     */
    storages(_uuid: string, _options?: RequestOptions, _callback?: Function): Promise<ApiResult<GenericApiResult>> {
        return this._sub('storages', _uuid, _options, _callback);
    }


    /**
     *  Get Metrics for this Object
     *
     * @param _uuid Object UUID
     * @param _callback Callback Function
     */
    metrics(_uuid: string, _options?: RequestOptions, _callback?: Function): Promise<ApiResult<GenericApiResult>> {
        return this._sub('metrics', _uuid, _options, _callback);
    }

    /**
     * Get single Storage <=> Server Relation
     *
     * @param _uuid
     * @param _storage_uuid
     * @param _callback
     * @returns {any}
     */
    storage(_uuid: string, _storage_uuid: string, _callback?: Function): Promise<ApiResult<GenericApiResult>> {
        return this._sub_get('storages', _uuid, _storage_uuid, _callback);
    }


    /**
     * Patch Storage that is related to a Server i flag it as Bootdevice
     *
     *
     * @param _uuid
     * @param _storage_uuid
     * @param _attribute
     * @param _callback
     * @returns {any|TRequest}
     */
    patchStorage(_uuid: string, _storage_uuid: string, _attribute: Object, _callback?: Function): Promise<ApiResult<GenericApiResult>> {
        return this._sub_patch('storages', _uuid, _storage_uuid, _attribute, _callback);
    }


    /**
     * Relate Storage with Server
     *
     * @param _uuid Server UUID
     * @param _storage_uuid IP UUID
     * @param _callback  Callback Function
     * @returns {TRequest|any}
     */
    addStorage(_uuid: string, _storage_uuid: string, _callback?: Function): Promise<ApiResult<GenericApiResult>> {
        return this._sub_post('storages', _uuid, {'object_uuid': _storage_uuid}, _callback);
    }


    /**
     * Remove Storage from Server
     *
     *
     * @param _uuid Server UUID
     * @param _storage_uuid IP UUID
     * @param _callback
     * @returns {any|void|PromiseLike<void>}
     */
    removeStorage(_uuid: string, _storage_uuid: string, _callback?: Function): Promise<ApiResult<GenericApiResult>> {
        return this._sub_remove('storages', _uuid, _storage_uuid, _callback);
    }



    /**
     *  Isoimages
     *
     */


    /**
     *  Get Storages for this Object
     *
     * @param _uuid Object UUID
     * @param _callback Callback Function
     */
    isoimages(_uuid: string, _options?: RequestOptions, _callback?: Function): Promise<ApiResult<GenericApiResult>> {
        return this._sub('isoimages', _uuid, _options, _callback);
    }


    /**
     * Get single Storage <=> Server Relation
     *
     * @param _uuid
     * @param _isoimage_uuid
     * @param _callback
     * @returns {any}
     */
    isoimage(_uuid: string, _isoimage_uuid: string, _callback?: Function): Promise<ApiResult<GenericApiResult>> {
        return this._sub_get('isoimages', _uuid, _isoimage_uuid, _callback);
    }


    /**
     * Patch Storage that is related to a Server i flag it as Bootdevice
     *
     *
     * @param _uuid
     * @param _isoimage_uuid
     * @param _attribute
     * @param _callback
     * @returns {any|TRequest}
     */
    patchIsoimage(_uuid: string, _isoimage_uuid: string, _attribute: Object, _callback?: Function) {
        return this._sub_patch('isoimages', _uuid, _isoimage_uuid, _attribute, _callback);
    }


    /**
     * Relate Storage with Server
     *
     * @param _uuid Server UUID
     * @param _isoimage_uuid IP UUID
     * @param _callback  Callback Function
     * @returns {TRequest|any}
     */
    addIsoimage(_uuid: string, _isoimage_uuid: string, _callback?: Function): Promise<ApiResult<GenericApiResult>> {
        return this._sub_post('isoimages', _uuid, {'object_uuid': _isoimage_uuid}, _callback);
    }


    /**
     * Remove Isoimage from Server
     *
     *
     * @param _uuid Server UUID
     * @param _isoimage_uuid IP UUID
     * @param _callback
     * @returns {any|void|PromiseLike<void>}
     */
    removeIsoimage(_uuid: string, _isoimage_uuid: string, _callback?: Function): Promise<ApiResult<GenericApiResult>> {
        return this._sub_remove('isoimages', _uuid, _isoimage_uuid, _callback);
    }


    /**
     *  Networks
     *
     */


    /**
     *  Get NEtworks for this Object
     *
     * @param _uuid Server UUID
     * @param _callback Callback Function
     */
    networks(_uuid: string, _options?: RequestOptions, _callback?: Function): Promise<ApiResult<GenericApiResult>> {
        return this._sub('networks', _uuid, _options, _callback);
    }


    /**
     * Get single NEtwork <=> Server Relation
     *
     * @param _uuid
     * @param _network_uuid Network UUID
     * @param _callback
     * @returns {any}
     */
    network(_uuid: string, _network_uuid: string, _callback?: Function): Promise<ApiResult<GenericApiResult>> {
        return this._sub_get('networks', _uuid, _network_uuid, _callback);
    }


    /**
     * Patch Network that is related to a Server
     *
     * Attributes:
     *   bootdevice
     *   l3security
     *   ordering
     *
     *
     * @param _uuid
     * @param _network_uuid Network UUID
     * @param _attribute
     * @param _callback
     * @returns {any|TRequest}
     */
    patchNetwork(_uuid: string, _network_uuid: string, _attribute: Object, _callback?: Function): Promise<ApiResult<GenericApiResult>> {
        return this._sub_patch('networks', _uuid, _network_uuid, _attribute, _callback);
    }


    /**
     * Relate Storage with Server
     *
     * @param _uuid Server UUID
     * @param _network_uuid Network UUID
     * @param _callback  Callback Function
     * @returns {TRequest|any}
     */
    addNetwork(_uuid: string, _network_uuid: string, _additionalOptions?: Object, _callback?: Function): Promise<ApiResult<GenericApiResult>> {
        if (_additionalOptions === undefined) { _additionalOptions = {}; }
        const _options = assignIn({ 'object_uuid': _network_uuid }, _additionalOptions);

        return this._sub_post('networks', _uuid, _options, _callback);
    }


    /**
     * Remove Storage from Server
     *
     *
     * @param _uuid Server UUID
     * @param _network_uuid Network UUID
     * @param _callback
     * @returns {any|void|PromiseLike<void>}
     */
    removeNetwork(_uuid: string, _network_uuid: string, _callback?: Function): Promise<ApiResult<GenericApiResult>> {
        return this._sub_remove('networks', _uuid, _network_uuid, _callback);
    }

}


export { Server };
