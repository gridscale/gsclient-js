/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { PaasServiceParameters } from './PaasServiceParameters';
import { PaasServiceResourceLimits } from './PaasServiceResourceLimits';

export type PaasServiceCreate = {
    /**
     * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    name: string;
    /**
     * The template used to create the service, you can find an available list at the /service_templates endpoint.
     */
    paas_service_template_uuid: string;
    /**
     * List of labels.
     */
    labels?: Array<string>;
    /**
     * The UUID of the security zone that the service is running in.
     */
    paas_security_zone_uuid?: string;
    parameters?: PaasServiceParameters;
    resource_limits?: PaasServiceResourceLimits;
}
