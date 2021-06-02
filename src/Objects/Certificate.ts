import { GridscaleObjects } from "./GridscaleObjects";
import { APIClass, ApiResult, RequestOptions } from "../api";
import * as models from "./../Specs";
import { CertificateCreate } from "./../Specs";

interface Certificate {
  list(
    _options?: RequestOptions,
    _callback?: Function
  ): Promise<ApiResult<models.CertificatesGetResponse>>;
  get(
    _uuid: string,
    _callback?: Function
  ): Promise<ApiResult<models.CertificateGetResponse>>;
  create(
    _attributes: CertificateCreate,
    _callback?: Function
  ): Promise<ApiResult<models.CreateResponse>>;
}

class Certificate extends GridscaleObjects {
  constructor(_api: APIClass) {
    super(_api, "/objects/certificates");
  }
}

export { Certificate };
