/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PaasServiceParameters } from './PaasServiceParameters';
import type { PaasServiceResourceLimits } from './PaasServiceResourceLimits';

export type PaasServiceUpdate = {
    /**
     * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    name?: string;
    /**
     * List of labels.
     */
    labels?: Array<string>;
    parameters?: PaasServiceParameters;
    resource_limits?: PaasServiceResourceLimits;
    /**
     * The template to which you want to update/upgrade your paas service.
     */
    paas_service_template_uuid?: string;
}
