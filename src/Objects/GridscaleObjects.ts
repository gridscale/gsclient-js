import * as _ from 'lodash';
import { APIClass, ApiResult, GenericApiResult, RequestOptions, VoidApiResult } from '../api';
import { EventResponse, CreateResponse } from './../Specs';



class GridscaleObjects {

    // Naming
    public _api: APIClass;
    public _defaults: RequestOptions;
    public _basepath: string;


    /**
     * Create Object Endpoint
     *
     * @param _api API Class Instance
     * @param _path Path to the Object
     */
    constructor(_api: APIClass, _path: string) {
        this._api = _api;

        this._defaults = {
            'page': 0,
            'limit' : 25
        };
        this._basepath = _path;

    }

    /**
     * Overwrite Default Settings for this Type
     *
     * @param _options
     */
    public setDefaults( _options: RequestOptions ) {
        _.assignIn(this._defaults, _options);
    }



    /**
     * Add Local Options with Defaults
     *
     *
     * @param _options
     * @returns {RequestOptions}
     * @private
     */
    _buildRequestOptions (_options?: RequestOptions) {
        // Clone Defaults
        const defaults = _.assignIn({}, this._defaults);

        // Add Options
        if (!_.isUndefined(_options) && !_.isFunction(_options)) {
            _.assignIn(defaults, _options);
        }

        // Return Default Values
        return defaults;
    }


    /**
     * List Objects
     *
     *
     * @param _options
     * @param _callback
     * @returns {Promise<ApiResult<GenericApiResult>>}
     */
    list(_options?: RequestOptions, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<GenericApiResult>> {
        // Get Defaults
        const requestOptions = this._buildRequestOptions(_options);

        // Set Callback
        if (_.isFunction(_options) && _.isUndefined(_callback)) {
            _callback = _options;
        }

        return this._api.get(this._basepath, requestOptions, _callback);
    }



    /**
     * Get Single Object by UUID
     *
     * @param _uuid
     * @param _callback
     */
    get(_uuid: string, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<GenericApiResult>> {
        return this._api.get(this._basepath + '/' + _uuid, {}, _callback);
    }




    /**
     * remove Single Object by UUID
     *
     * @param _uuid
     * @param _callback
     */
    remove(_uuid: string, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<VoidApiResult>> {
        return this._api.remove( this._basepath + '/' + _uuid, _callback);
    }



    /**
     * Create object
     * @param _attributes
     * @param _callback
     * @returns {Promise<ApiResult<CreateResult>>}
     */
    create(_attributes: Object, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<CreateResponse>> {
        return this._api.post(  this._basepath , _attributes , _callback);
    }



    /**
     * Patch object
     * @param _attributes
     * @param _callback
     * @returns {Promise<ApiResult<VoidApiResult>>}
     */
    patch(_uuid: string, _attributes: Object, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<VoidApiResult>> {
        return this._api.patch(  this._basepath + '/' + _uuid , _attributes , _callback);
    }


    /**
     * Wrapper for Subtypes to save some lines of code
     *
     * @param _uuid Object UUID
     * @param _callback Callback Function
     */
    _sub(_type: string, _uuid: string, _options?: RequestOptions, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<GenericApiResult>> {

        // Get Defaults
        const requestOptions = this._buildRequestOptions(_options);

        // Set Callback
        if (_.isFunction(_options) && _.isUndefined(_callback)) {
            _callback = _options;
        }

        return this._api.get( this._basepath + '/' + _uuid + '/' + _type , requestOptions , _callback);
    }




    /**
     * Get Single Sub Object by UUID
     *
     * @param _type
     * @param _uuid
     * @param _sub_uuid
     * @param _callback
     * @private
     */
    _sub_get(_type: string, _uuid: string, _sub_uuid: string, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<GenericApiResult>> {
        return this._api.get( this._basepath + '/' + _uuid + '/' + _type + '/' + _sub_uuid , {}, _callback);
    }




    /**
     * Post to Subtype ob Object
     *
     * @param _type
     * @param _uuid
     * @param _attributes
     * @param _callback
     * @returns {Promise<ApiResult<GenericApiResult>>}
     * @private
     */
    _sub_post(_type: string, _uuid: string, _attributes: Object, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<GenericApiResult>> {
        return this._api.post( this._basepath + '/' + _uuid + '/' + _type , _attributes , _callback);
    }



    /**
     * Patch Subobject
     *
     * @param _type
     * @param _uuid
     * @param _sub_uuid
     * @param _attributes
     * @param _callback
     * @returns {Promise<ApiResult<GenericApiResult>>}
     * @private
     */
    _sub_patch(_type: string, _uuid: string, _sub_uuid: string, _attributes: Object, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<GenericApiResult>> {
        return this._api.patch( this._basepath + '/' + _uuid + '/' + _type + '/' + _sub_uuid , _attributes , _callback);
    }


    /**
     * Remove Sub Type from Object
     *
     *
     * @param _type
     * @param _uuid
     * @param _sub_uuid
     * @param _callback
     * @returns {Promise<ApiResult<GenericApiResult>>}
     * @private
     */
    _sub_remove(_type: string, _uuid: string, _sub_uuid: string, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<GenericApiResult>> {
        return this._api.remove( this._basepath + '/' + _uuid + '/' + _type + '/' + _sub_uuid, _callback);
    }


    /**
     *  Get Events for this Object
     *
     * @param _uuid Object UUID
     * @param _callback Callback Function
     */
    events(_uuid: string, _options?: RequestOptions, _callback?: (response: Response, result: ApiResult<GenericApiResult>) => void): Promise<ApiResult<EventResponse>> {
        return this._sub('events', _uuid, _options, _callback);
    }
}

export {GridscaleObjects};
