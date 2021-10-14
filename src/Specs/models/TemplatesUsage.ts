/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { CurrentUsagePerMinute } from './CurrentUsagePerMinute';
import { UsagePerInterval } from './UsagePerInterval';

export type TemplatesUsage = {
    /**
     * Status indicates the status of the object.
     */
    status?: string;
    /**
     * The operating system installed in the template.
     */
    ostype?: string;
    /**
     * Description of the Template.
     */
    version?: string;
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
     * The capacity of a storage/ISO-Image/template/snapshot in GB.
     */
    capacity?: number;
    /**
     * The OS distrobution that the Template contains.
     */
    distro?: string;
    /**
     * Description of the Template.
     */
    description?: string;
    /**
     * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    name?: string;
    /**
     * List of labels.
     */
    labels?: Array<string>;
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
