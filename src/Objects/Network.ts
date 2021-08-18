

import {GridscaleObjects} from './GridscaleObjects';
import { APIClass, RequestOptions, ApiResult, VoidApiResult, GenericApiResult } from '../api';
import * as models from './../Specs';
import { NetworkCreate, NetworkUpdate } from './../Specs';

interface Network {
    list(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.NetworksGetResponse>>;
    get(_uuid: string, _callback?: Function): Promise<ApiResult<models.NetworkGetResponse>>;
    create(_attributes: NetworkCreate, _callback?: Function): Promise<ApiResult<models.CreateResponse>>;
    patch(_uuid: string, _attributes: NetworkUpdate, _callback?: Function): Promise<ApiResult<VoidApiResult>>;
}

class Network extends GridscaleObjects {

    constructor(_api: APIClass) { super(_api, '/objects/networks'); }

    /**
     * List pinned servers
     *
     * @param _network_uuid
     * @param _callback
     * @returns {Promise<ApiResult<VoidApiResult>>}
     */
    pinnedServers(_network_uuid: string, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<models.NetworkPinnedServersResponse>> {
        return this._api.get(  this._basepath + '/' + _network_uuid + '/pinned_servers', _callback );
    }

    /**
     * Pin a server to an ip
     *
     * @param _network_uuid
     * @param _server_uuid
     * @param _ip
     * @param _callback
     * @returns {Promise<ApiResult<VoidApiResult>>}
     */
    pinServerIp(_network_uuid: string, _server_uuid: string, _payload: models.PinnedServerPayload, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<VoidApiResult>> {
        return this._api.patch(  this._basepath + '/' + _network_uuid + '/pinned_servers/' + _server_uuid , _payload , _callback );
    }

    /**
     * Unpin a server from an ip
     *
     * @param _network_uuid
     * @param _server_uuid
     * @param _ip
     * @param _callback
     * @returns {Promise<ApiResult<VoidApiResult>>}
     */
    unpinServerIp(_network_uuid: string, _server_uuid: string, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<VoidApiResult>> {
        return this._api.remove(  this._basepath + '/' + _network_uuid + '/pinned_servers/' + _server_uuid , _callback );
    }
}


export { Network };
