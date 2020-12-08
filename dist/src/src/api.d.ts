export interface Links<T> {
    self?(): Promise<ApiResult<T>>;
    first?(): Promise<ApiResult<T>>;
    next?(): Promise<ApiResult<T>>;
    last?(): Promise<ApiResult<T>>;
}
export interface Meta {
    count: number;
    total: number;
    limit: number;
    offset: number;
    page: number;
}
export declare type GenericApiResult = any;
export declare type VoidApiResult = void;
export interface ApiResult<T> {
    success: boolean;
    result: T;
    response?: Response;
    requestInit?: RequestInit;
    links?: Links<T>;
    meta?: Meta;
    watch?: Function | null;
    id?: string | null;
    failureType?: string | null;
}
export interface ApiSettings {
    endpoint?: string;
    endpointOverrides?: {
        [key: string]: string;
    };
    token?: string;
    userId?: string;
    limit?: number;
    watchdelay?: number;
    apiClient?: string;
    fetch?: Function;
}
export interface RequestOptions {
    page?: number;
    limit?: number;
    fields?: string[];
    filter?: string[];
    sort?: string | string[];
}
export interface RequestPollResult {
    message: string;
    status: string;
    create_time: string;
}
export interface CreateResult {
    requestUuid?: string;
    objectUuid?: string;
}
export interface BaseRelationObject {
    objectName?: string;
    objectUuid?: string;
}
/**
 * interface with basic properties each object (server, storage ...) should have
 */
export interface BaseObject {
    objectUuid?: string;
    status?: string;
    name?: string;
    labels?: string[];
    locationUuid?: string;
    relations?: {
        [key: string]: BaseRelationObject[];
    };
}
export declare class GSError extends Error {
    result: GenericApiResult;
    success: boolean;
    response: Response;
    constructor(message: any, result: any);
}
export declare class APIClass {
    private settings;
    /**
     * Store api client in current session
     * @param _client  String
     */
    storeClient(_client: string): void;
    /**
     * Store Token for Current Session
     * @param _token Secret Token
     */
    storeToken(_token: string, _userId: string): void;
    /**
     * Update local Request Options
     *
     * @param _option
     */
    setOptions: (_option: ApiSettings) => void;
    request(_path: string, _options: RequestInit, _callback?: Function): Promise<ApiResult<GenericApiResult>>;
    /**
     * Start the API Request
     *
     *
     * @param _path
     * @param _options
     * @param _callback
     * @returns {Promise}
     */
    private makeRequest;
    /**
     * Build Option URL to expand URL
     * @param _options
     * @returns {string}
     */
    private buildRequestURL;
    /**
     * Start Get Call
     * @param _path
     * @param _callback
     */
    get(_path: string, _options?: RequestOptions | Function, _callback?: Function): Promise<ApiResult<GenericApiResult>>;
    /**
     * Start Delete Call
     * @param _path
     * @param _callback
     */
    remove(_path: string, _callback?: Function): Promise<ApiResult<GenericApiResult>>;
    /**
     * Send Post Request
     *
     * @param _path Endpoint
     * @param _attributes  Attributes for Post Body
     * @param _callback Optional Callback
     * @returns {Promise}
     */
    post(_path: string, _attributes: Object, _callback?: Function): Promise<ApiResult<GenericApiResult>>;
    /**
     * Send PAtCH Request
     *
     * @param _path Endpoint
     * @param _attributes  Attributes for Post Body
     * @param _callback Optional Callback
     * @returns {Promise}
     */
    patch(_path: string, _attributes: Object, _callback?: Function): Promise<ApiResult<GenericApiResult>>;
    /**
     * Generate URL for Linked Request. No Options are required because its in the URL already
     *
     * @param _link
     * @param _callback
     * @returns {Function}
     */
    private link;
    /**
     * Start Pooling on Request Endpoint
     *
     *
     * @param _requestid
     * @param _callback
     * @returns {Promise}
     */
    requestpooling(_requestid: string, _callback?: Function): Promise<ApiResult<{
        [uuid: string]: RequestPollResult;
    }>>;
    /**
     * Recursive creating of Request Proises
     *
     *
     * @param _requestid
     * @param _resolve
     * @param _reject
     */
    buildAndStartRequestCallback(_requestid: string, _resolve: Function, _reject: Function): void;
    /**
     * Watch a Single Request until it is ready or failed
     *
     * @param _requestid
     * @param _callback
     */
    watchRequest(_requestid: string): Promise<ApiResult<RequestPollResult>>;
    private callbacks;
    addLogger: (_callback: Function) => void;
    private log;
    /**
     * transform camel case attribute names to lodashed names
     * @param _attributes
     */
    private lodashify;
    /**
     * transform lodashed attribute names to camel case names
     * @param _attributes
     */
    private camelify;
}
export declare const api: APIClass;
