import { GridscaleObjects } from "./GridscaleObjects";
import { APIClass, ApiResult, RequestOptions } from "../api";
import * as models from "../Specs";

interface BackupLocation {
  list(
    _options?: RequestOptions,
    _callback?: Function
  ): Promise<ApiResult<models.BackupLocationsGetResponse>>;

}

class BackupLocation extends GridscaleObjects {
  constructor(_api: APIClass) {
    super(_api, "/objects/backup_locations");
  }
}

export { BackupLocation };
