/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ListenPortsByIpIndex } from './ListenPortsByIpIndex';
import type { PaasServiceCredentials } from './PaasServiceCredentials';
import type { PaasServiceParameters } from './PaasServiceParameters';
import type { PaasServiceResourceLimits } from './PaasServiceResourceLimits';

export type PaasServiceCreateResponse = {
    /**
     * The UUID identifying the request.
     */
    request_uuid?: string;
    listen_ports?: ListenPortsByIpIndex;
    /**
     * The template used to create the service, you can find an available list at the /service_templates endpoint.
     */
    paas_service_uuid?: string;
    credentials?: PaasServiceCredentials;
    /**
     * The UUID of an object is always unique, and refers to a specific object.
     */
    object_uuid?: string;
    parameters?: PaasServiceParameters;
    resource_limits?: PaasServiceResourceLimits;
}
