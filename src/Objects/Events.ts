

import {GridscaleObjects} from './GridscaleObjects';
import { APIClass, RequestOptions, ApiResult } from '../api';
import { EventResponse } from './../Specs';

interface Events {
    list(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<EventResponse>>;
}
class Events extends GridscaleObjects {

    constructor(_api: APIClass) { super(_api, '/objects/events'); }

}


export { Events };
