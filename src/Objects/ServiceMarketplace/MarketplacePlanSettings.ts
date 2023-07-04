import { GridscaleObjects } from '../GridscaleObjects';
import { APIClass, ApiResult } from '../../api';
import { MarketplacePlanSettingsResponse } from '../../custom.models';


interface MarketplacePlanSettings {
  get(
    _planUuid: string,
    _callback?: Function
  ): Promise<ApiResult<MarketplacePlanSettingsResponse>>;
}

class MarketplacePlanSettings extends GridscaleObjects {
  constructor(_api: APIClass) {
    super(_api, '/marketplace/v1/plans');
  }

  get(_planUuid: string, _callback?: (response: Response, result: ApiResult<MarketplacePlanSettingsResponse>) => void): Promise<ApiResult<MarketplacePlanSettingsResponse>> {
    return this._api.get(this._basepath + '/' + _planUuid + '/settings-schema', {}, _callback);
  }
}

export { MarketplacePlanSettings };
