

import { GridscaleObjects } from './GridscaleObjects';
import { APIClass, ApiResult, GenericApiResult, RequestOptions, VoidApiResult } from '../api';
import * as _ from 'lodash';
import * as models from './../Specs';
import { ServerCreate, ServerUpdate, LinkedStorageUpdate, LinkedIsoimageUpdate, LinkedNetworkUpdate, LinkNetwork } from './../Specs';

interface Server {
    // override some method signatures for more explicit interfaces
    list(_options?: RequestOptions, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<models.ServersGetResponse>>;
    get(_uuid: string, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<models.ServerGetResponse>>;
    create(_attributes: ServerCreate, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<models.ServerCreateResponse>>;
    patch(_uuid: string, _attributes: ServerUpdate, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<VoidApiResult>>;
}

class Server extends GridscaleObjects {

    constructor(_api: APIClass) { super(_api, '/objects/servers'); }


    /**
     * Start/Stop Server
     *
     * @param _uuid
     * @param _power
     * @param _callback
     * @returns {Promise<ApiResult<VoidApiResult>>}
     */
    power(_uuid: string, _power: Boolean, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<VoidApiResult>> {
        return this._api.patch(  this._basepath + '/' + _uuid + '/power' , { power : _power } , _callback );
    }

    /**
     * Send ACPI-Shutdown to User
     *
     * @param _uuid
     * @param _callback
     * @returns {Promise<ApiResult<VoidApiResult>>}
     */
    shutdown(_uuid: string, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<VoidApiResult>> {
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
    ips(_uuid: string, _options?: RequestOptions, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<models.LinkedIpsGetResponse>> {
        return this._sub('ips', _uuid, _options, _callback);
    }

    /**
     * Get IP that is in Relation with Server
     *
     * @param _uuid
     * @param _ip_uuid
     * @param _callback
     * @returns {Promise<ApiResult<models.LinkedIpGetResponse>>}
     */
    ip(_uuid: string, _ip_uuid: string, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<models.LinkedIpGetResponse>> {
        return this._sub_get('ips', _uuid, _ip_uuid, _callback);
    }


    /**
     * Relate an IP with the Server
     *
     * @param _uuid Server UUID
     * @param _ip_uuid IP UUID
     * @param _callback  Callback Function
     * @returns {Promise<ApiResult<VoidApiResult>>}
     */
    addIp(_uuid: string, _ip_uuid: string, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<VoidApiResult>> {
        return this._sub_post('ips', _uuid, {'object_uuid': _ip_uuid}, _callback);
    }


    /**
     * Remove IP-Adress from Server
     *
     *
     * @param _uuid Server UUID
     * @param _ip_uuid IP UUID
     * @param _callback
     * @returns {Promise<ApiResult<VoidApiResult>>}
     */
    removeIp(_uuid: string, _ip_uuid: string, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<VoidApiResult>> {
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
    storages(_uuid: string, _options?: RequestOptions, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<models.LinkedStoragesGetResponse>> {
        return this._sub('storages', _uuid, _options, _callback);
    }

    /**
     * Get single Storage <=> Server Relation
     *
     * @param _uuid
     * @param _storage_uuid
     * @param _callback
     * @returns {Promise<ApiResult<models.LinkedStorageGetResponse>>}
     */
    storage(_uuid: string, _storage_uuid: string, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<models.LinkedStorageGetResponse>> {
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
     * @returns {Promise<ApiResult<VoidApiResult>>}
     */
    patchStorage(_uuid: string, _storage_uuid: string, _attribute: LinkedStorageUpdate, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<VoidApiResult>> {
        return this._sub_patch('storages', _uuid, _storage_uuid, _attribute, _callback);
    }

    /**
     * Relate Storage with Server
     *
     * @param _uuid Server UUID
     * @param _storage_uuid IP UUID
     * @param _callback  Callback Function
     * @returns {Promise<ApiResult<VoidApiResult>>}
     */
    addStorage(_uuid: string, _storage_uuid: string, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<VoidApiResult>> {
        return this._sub_post('storages', _uuid, { 'object_uuid': _storage_uuid }, _callback);
    }

    /**
     * Remove Storage from Server
     *
     *
     * @param _uuid Server UUID
     * @param _storage_uuid IP UUID
     * @param _callback
     * @returns {Promise<ApiResult<VoidApiResult>>}
     */
    removeStorage(_uuid: string, _storage_uuid: string, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<VoidApiResult>> {
        return this._sub_remove('storages', _uuid, _storage_uuid, _callback);
    }

    /**
     *  Metrics
     *
     */

    /**
     *  Get Metrics for this Object
     *
     * @param _uuid Object UUID
     * @param _callback Callback Function
     */
    metrics(_uuid: string, _options?: RequestOptions, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<models.ServerMetricsGetResponse>> {
        return this._sub('metrics', _uuid, _options, _callback);
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
    isoimages(_uuid: string, _options?: RequestOptions, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<models.LinkedIsoimagesGetResponse>> {
        return this._sub('isoimages', _uuid, _options, _callback);
    }


    /**
     * Get single Storage <=> Server Relation
     *
     * @param _uuid
     * @param _isoimage_uuid
     * @param _callback
     * @returns {Promise<ApiResult<models.LinkedIsoimageGetResponse>>}
     */
    isoimage(_uuid: string, _isoimage_uuid: string, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<models.LinkedIsoimageGetResponse>> {
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
     * @returns {Promise<ApiResult<VoidApiResult>>}
     */
    patchIsoimage(_uuid: string, _isoimage_uuid: string, _attribute: LinkedIsoimageUpdate, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<VoidApiResult>> {
        return this._sub_patch('isoimages', _uuid, _isoimage_uuid, _attribute, _callback);
    }


    /**
     * Relate Storage with Server
     *
     * @param _uuid Server UUID
     * @param _isoimage_uuid IP UUID
     * @param _callback  Callback Function
     * @returns {Promise<ApiResult<VoidApiResult>>}
     */
    addIsoimage(_uuid: string, _isoimage_uuid: string, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<VoidApiResult>> {
        return this._sub_post('isoimages', _uuid, {'object_uuid': _isoimage_uuid}, _callback);
    }


    /**
     * Remove Isoimage from Server
     *
     *
     * @param _uuid Server UUID
     * @param _isoimage_uuid IP UUID
     * @param _callback
     * @returns {Promise<ApiResult<VoidApiResult>>}
     */
    removeIsoimage(_uuid: string, _isoimage_uuid: string, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<VoidApiResult>> {
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
    networks(_uuid: string, _options?: RequestOptions, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<models.LinkedNetworksGetResponse>> {
        return this._sub('networks', _uuid, _options, _callback);
    }


    /**
     * Get single NEtwork <=> Server Relation
     *
     * @param _uuid
     * @param _network_uuid Network UUID
     * @param _callback
     * @returns {Promise<ApiResult<models.LinkedNetworkGetResponse>>}
     */
    network(_uuid: string, _network_uuid: string, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<models.LinkedNetworkGetResponse>> {
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
     * @returns {Promise<ApiResult<VoidApiResult>>}
     */
    patchNetwork(_uuid: string, _network_uuid: string, _attribute: LinkedNetworkUpdate, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<VoidApiResult>> {
        return this._sub_patch('networks', _uuid, _network_uuid, _attribute, _callback);
    }


    /**
     * Relate Storage with Server
     *
     * @param _uuid Server UUID
     * @param _network_uuid Network UUID
     * @param _callback  Callback Function
     * @returns {Promise<ApiResult<VoidApiResult>>}
     */
    addNetwork(_uuid: string, _network_uuid: string, _additionalOptions?: LinkNetwork, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<VoidApiResult>> {
        if (_additionalOptions === undefined) { _additionalOptions = { object_uuid: _network_uuid }; }
        const _options = _.assignIn({ 'object_uuid': _network_uuid }, _additionalOptions);

        return this._sub_post('networks', _uuid, _options, _callback);
    }


    /**
     * Remove Storage from Server
     *
     *
     * @param _uuid Server UUID
     * @param _network_uuid Network UUID
     * @param _callback
     * @returns {Promise<ApiResult<VoidApiResult>>}
     */
    removeNetwork(_uuid: string, _network_uuid: string, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<VoidApiResult>> {
        return this._sub_remove('networks', _uuid, _network_uuid, _callback);
    }

}


export { Server };
