import { GridscaleObjects } from './GridscaleObjects';
import { APIClass, ApiResult, GenericApiResult } from '../api';
declare class PAASService extends GridscaleObjects {
    constructor(_api: APIClass);
    renewCredentials(_serviceUUID: string): Promise<ApiResult<GenericApiResult>>;
}
export { PAASService };
