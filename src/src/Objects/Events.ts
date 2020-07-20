

import {GridscaleObjects} from './GridscaleObjects';
import { APIClass, RequestOptions, ApiResult } from '../api';
import { EventResponse } from './model/models';


class Events extends GridscaleObjects {

    constructor(_api: APIClass) { super(_api, '/objects/events'); }
    
    list(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<EventResponse>> {
        return super._pipe_result(
            super.list(_options, _callback),
            'events'
        );
    }
}


export { Events };
