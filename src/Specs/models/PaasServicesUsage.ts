/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { CurrentUsagePerMinute } from './CurrentUsagePerMinute';
import { PaasServiceCredentials } from './PaasServiceCredentials';
import { PaasServiceParameters } from './PaasServiceParameters';
import { PaasServiceResourceLimits } from './PaasServiceResourceLimits';
import { UsagePerInterval } from './UsagePerInterval';

export type PaasServicesUsage = {
    /**
     * The UUID of an object is always unique, and refers to a specific object.
     */
    object_uuid?: string;
    credentials?: PaasServiceCredentials;
    /**
     * Defines the date and time the object was initially created.
     */
    create_time?: string;
    /**
     * The template used to create the service, you can find an available list at the /service_templates endpoint.
     */
    service_template_uuid?: string;
    /**
     * Defines the date and time of the last object change.
     */
    change_time?: string;
    /**
     * Status indicates the status of the object.
     */
    status?: string;
    /**
     * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    name?: string;
    parameters?: PaasServiceParameters;
    resource_limits?: PaasServiceResourceLimits;
    /**
     * Uuid of the project used to create this object
     */
    project_uuid?: string;
    /**
     * The deleted status of the object.
     */
    deleted?: boolean;
    current_usage_per_minute?: CurrentUsagePerMinute;
    usage_per_interval?: UsagePerInterval;
}
