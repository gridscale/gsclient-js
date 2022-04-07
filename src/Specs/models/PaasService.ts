/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { ListenPortsByIpIndex } from './ListenPortsByIpIndex';
import { PaasServiceCredentials } from './PaasServiceCredentials';
import { PaasServiceParameters } from './PaasServiceParameters';
import { PaasServiceResourceLimits } from './PaasServiceResourceLimits';

export type PaasService = {
    /**
     * The UUID of an object is always unique, and refers to a specific object.
     */
    object_uuid?: string;
    /**
     * List of labels.
     */
    labels?: Array<string>;
    credentials?: PaasServiceCredentials;
    /**
     * Defines the date and time the object was initially created.
     */
    create_time?: string;
    listen_ports?: ListenPortsByIpIndex;
    /**
     * The UUID of the security zone that the service is running in.
     */
    security_zone_uuid?: string;
    /**
     * The UUID of the private network to which the service should be connected
     */
    network_uuid?: string;
    /**
     * The template used to create the service, you can find an available list at the /service_templates endpoint.
     */
    service_template_uuid?: string;
    /**
     * The template service's category used to create the service
     */
    service_template_category?: string;
    /**
     * Total minutes the object has been running.
     */
    usage_in_minutes?: number;
    /**
     * Deprecated
     */
    current_price?: number;
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
}
