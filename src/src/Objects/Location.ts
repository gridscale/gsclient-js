import { assignIn, isFunction, isUndefined } from 'lodash';
import { APIClass, ApiResult, GSError, GenericApiResult, RequestOptions } from '../api';
import * as models from './model/models';

class Location {

    // Naming
    public _api: APIClass;
    public _defaults: RequestOptions;
    public _basepath: string;


    /**
     * Create Object Endpoint
     *
     *
     * @param _api API Class Instance
     * @param _path Path to the Object
     */
    constructor(_api: APIClass) {
        this._api = _api;

        this._defaults = {
            'page': 0,
            'limit' : 25
        };
        this._basepath = '/objects/locations';

    }

    /**
     * Overwrite Default Settings for this Type
     *
     * @param _options
     */
    public setDefaults( _options: RequestOptions ) {

        assignIn( this._defaults , _options );
    }



    /**
     * Add Local Options with Defaults
     *
     *
     * @param _options
     * @returns {any}
     * @private
     */
    _buildRequestOptions (_options?: RequestOptions) {

        // Clone Defaults
        const defaults = assignIn({}, this._defaults);

        // Add Options
        if ( !isUndefined( _options ) && !isFunction( _options ) ) {
            assignIn(defaults, _options);
        }

        // Return Default Values
        return defaults;
    }

    _pipe_result<T>(_originalPromise: Promise<ApiResult<T>>, _key: string): Promise<ApiResult<T>> {
        return new Promise((_resolve, _reject) => {
            _originalPromise.then((_originalResult) => {

                if (typeof (_originalResult.result[_key]) !== 'undefined') {
                    _originalResult.result = _originalResult.result[_key];
                }


                _resolve(_originalResult);
            }, (_e) => _reject(_e));
        });
    }


    /**
     * List Objects
     *
     *
     * @param _options
     * @param _callback
     * @returns {any}
     */
    list(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.LocationsGetResponse>> {

        // Get Defaults
        const requestOptions = this._buildRequestOptions(_options);

        // Set Callback
        if ( isFunction( _options ) && isUndefined( _callback ) ) {
            _callback = _options;
        }

        return this._pipe_result(
            this._api.get( this._basepath , requestOptions , _callback),
            'locations'
        );
    }



    /**
     * Get Single Object by UUID
     *
     * @param _uuid
     * @param _callback
     */
    get(_uuid: string, _callback?: Function): Promise<ApiResult<models.LocationGetResponse>> {
        return this._pipe_result(
            this._api.get( this._basepath + '/' + _uuid, _callback),
            'location'
        );
    }

    /**
    Return all IP Adresses for this locations
    */
    getLocationIPs(_uuid: string, _callback?: Function): Promise<ApiResult<models.IpsGetResponse>> {
        return this._pipe_result(
            this._api.get( this._basepath + '/' + _uuid + '/ips', _callback),
            'ips'
        );
    }

    /**
    Return all isoimages for this location
    */
    getLocationISOImages(_uuid: string, _callback?: Function): Promise<ApiResult<models.IsoimagesGetResponse>>  {
        return this._pipe_result(
            this._api.get( this._basepath + '/' + _uuid + '/isoimages', _callback),
            'isoimages'
        );
    }

    /**
    Return all networks for this location
    */
    getLocationNetworks(_uuid: string, _callback?: Function): Promise<ApiResult<models.NetworksGetResponse>> {
        return this._pipe_result(
            this._api.get( this._basepath + '/' + _uuid + '/networks', _callback),
            'networks'
        );
    }

    /**
    Return all servers for this location
    */
    getLocationServers(_uuid: string, _callback?: Function): Promise<ApiResult<models.ServersGetResponse>> {
        return this._pipe_result(
            this._api.get( this._basepath + '/' + _uuid + '/servers', _callback),
            'servers'
        );

    }

    /**
    Return all snapshots for this location
    */
    getLocationSnapshots(_uuid: string, _callback?: Function): Promise<ApiResult<models.SnapshotGetResponse>> {
        return this._pipe_result(
            this._api.get( this._basepath + '/' + _uuid + '/snapshots', _callback),
            'snapshots'
        );
    }

    /**
    Return all storages for this location
    */
    getLocationStorages(_uuid: string, _callback?: Function): Promise<ApiResult<models.StoragesGetResponse>> {
        return this._pipe_result(
            this._api.get( this._basepath + '/' + _uuid + '/storages', _callback),
            'storages'
        );
    }

    /**
    Return all storages for this location
    */
    getLocationTemplates(_uuid: string, _callback?: Function): Promise<ApiResult<models.TemplatesGetResponse>> {
        return this._pipe_result(
            this._api.get( this._basepath + '/' + _uuid + '/templates', _callback),
            'templates'
        );
    }

}

export { Location };
