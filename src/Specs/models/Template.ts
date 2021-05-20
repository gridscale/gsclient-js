/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { AccumulatedUsage } from './AccumulatedUsage';
import { CurrentUsagePerMinute } from './CurrentUsagePerMinute';

export type Template = {
    /**
     * Status indicates the status of the object.
     */
    status?: string;
    /**
     * The operating system installed in the template.
     */
    ostype?: string;
    /**
     * Helps to identify which data-center an object belongs to.
     */
    location_uuid?: string;
    /**
     * Description of the Template.
     */
    version?: string;
    /**
     * Uses IATA airport code, which works as a location identifier.
     */
    location_iata?: string;
    /**
     * Defines the date and time of the last object change.
     */
    change_time?: string;
    /**
     * the object is private, the value will be true. Otherwise the value will be false.
     */
    private?: boolean;
    /**
     * The UUID of an object is always unique, and refers to a specific object.
     */
    object_uuid?: string;
    /**
     * If a template has been used that requires a license key (e.g. Windows Servers) this shows the product_no of the license (see the /prices endpoint for more details).
     */
    license_product_no?: number;
    /**
     * Defines the date and time the object was initially created.
     */
    create_time?: string;
    /**
     * Total minutes the object has been running.
     */
    usage_in_minutes?: number;
    /**
     * The capacity of a storage/ISO-Image/template/snapshot in GB.
     */
    capacity?: number;
    /**
     * The human-readable name of the location. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    location_name?: string;
    /**
     * The OS distrobution that the Template contains.
     */
    distro?: string;
    /**
     * Description of the Template.
     */
    description?: string;
    /**
     * Deprecated
     */
    current_price?: number;
    /**
     * The human-readable name of the location. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    location_country?: string;
    /**
     * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    name?: string;
    /**
     * List of labels.
     */
    labels?: Array<string>;
    current_usage_per_minute?: CurrentUsagePerMinute;
    accumulated_usage?: AccumulatedUsage;
}
