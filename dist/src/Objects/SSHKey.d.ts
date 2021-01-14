import { GridscaleObjects } from './GridscaleObjects';
import { APIClass, RequestOptions, ApiResult, VoidApiResult } from '../api';
import * as models from './../Specs/index';
import { SshkeyCreate, SshkeyUpdate } from './../Specs/index';
interface SSHKey {
    list(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.SshkeysGetResponse>>;
    get(_uuid: string, _callback?: Function): Promise<ApiResult<models.SshkeyGetResponse>>;
    create(_attributes: SshkeyCreate, _callback?: Function): Promise<ApiResult<models.CreateResponse>>;
    patch(_uuid: string, _attributes: SshkeyUpdate, _callback?: Function): Promise<ApiResult<VoidApiResult>>;
}
declare class SSHKey extends GridscaleObjects {
    constructor(_api: APIClass);
}
export { SSHKey };
