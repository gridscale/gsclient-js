import { GridscaleObjects } from './GridscaleObjects';
import { APIClass, RequestOptions, ApiResult } from '../api';
import { EventResponse } from './../Specs';
interface Events {
    list(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<EventResponse>>;
}
declare class Events extends GridscaleObjects {
    constructor(_api: APIClass);
}
export { Events };
