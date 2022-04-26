/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { PaasServiceParametersSchema } from './PaasServiceParametersSchema';
import { StorageType } from './StorageType';

export type PaasServiceTemplate = {
    /**
     * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    name?: string;
    /**
     * The UUID of an object is always unique, and refers to a specific object.
     */
    object_uuid?: string;
    /**
     * Describes the category of the service.
     */
    category?: string;
    /**
     * Describes the flavour of the service.
     */
    flavour?: string;
    /**
     * Describes the version of the service.
     */
    version?: string;
    /**
     * Describes the release of the service.
     */
    release?: string;
    /**
     * Describes the performance class of the service.
     */
    performance_class?: string;
    /**
     * List of service template uuids to which an upgrade is allowed.
     */
    version_upgrades?: Array<string>;
    /**
     * List of service template uuids to which a performance class update is allowed.
     */
    performance_class_updates?: Array<string>;
    /**
     * List of service template uuids to which a patch update is allowed.
     */
    patch_updates?: Array<string>;
    /**
     * List of labels.
     */
    labels?: Array<string>;
    /**
     * Product number related to the service template
     */
    product_no?: number;
    /**
     * Discounted product number related to the service template
     */
    discount_product_no?: number;
    /**
     * Time period (seconds) for which the discounted product number is valid
     */
    discount_period?: number;
    /**
     * The amount of concurrent connections for the service.
     */
    resources?: {
        /**
         * The amount of memory required by the service, either RAM(MB) or SSD Storage(GB).
         */
        memory?: number,
        /**
         * The amount of concurrent connections for the service.
         */
        connections?: number,
        storage_type?: StorageType,
    };
    /**
     * Status indicates the status of the object.
     */
    status?: string;
    parameters_schema?: PaasServiceParametersSchema;
    /**
     * Values of the autoscaling resources
     */
    autoscaling?: {
        /**
         * Limit values cores autoscaling
         */
        cores?: {
            min?: number,
            max?: number,
            /**
             * Product number used for billing this autoscaling resource. (per core)
             */
            product_no?: number,
        },
        /**
         * Limit values storage autoscaling
         */
        storage?: {
            min?: number,
            max?: number,
            /**
             * Product number used for billing this autoscaling resource. (per GiB)
             */
            product_no?: number,
        },
    };
}
