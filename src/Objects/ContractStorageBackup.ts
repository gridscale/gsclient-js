import { APIClass, RequestOptions, ApiResult } from '../api';
import * as models from '../Specs';
import { GridscaleObjects } from './GridscaleObjects';

interface ContractStorageBackup {
  list(_options?: RequestOptions, _callback?: Function): Promise<ApiResult<models.ContractStorageBackupGetResponse>>;
}

class ContractStorageBackup extends GridscaleObjects {
  constructor(_api: APIClass) {
    super(_api, '/contracts/storages_backups');
  }
}

export { ContractStorageBackup };
