import { GridscaleObjects } from './GridscaleObjects';
import { APIClass, RequestOptions, ApiResult } from '../api';
import * as models from './model/models';
interface SSHKey {
    list(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.SshkeysGetResponse>>;
    get(_uuid: string, _callback?: Function): Promise<ApiResult<models.SshkeyGetResponse>>;
    create(_attributes: Object, _callback?: Function): Promise<ApiResult<models.CreateResponse>>;
}
declare class SSHKey extends GridscaleObjects {
    constructor(_api: APIClass);
}
export { SSHKey };
