/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Snapshot = {
    /**
     * List of labels.
     */
    labels?: Array<string>;
    /**
     * The UUID of an object is always unique, and refers to a specific object.
     */
    object_uuid?: string;
    /**
     * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    name?: string;
    /**
     * Status indicates the status of the object.
     */
    status?: string;
    /**
     * The human-readable name of the location. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    location_country?: string;
    /**
     * Total minutes the object has been running.
     */
    usage_in_minutes?: number;
    /**
     * Helps to identify which data-center an object belongs to.
     */
    location_uuid?: string;
    /**
     * Defines the date and time of the last object change.
     */
    change_time?: string;
    /**
     * If a template has been used that requires a license key (e.g. Windows Servers) this shows the product_no of the license (see the /prices endpoint for more details).
     */
    license_product_no?: number;
    /**
     * Deprecated
     */
    current_price?: number;
    /**
     * Defines the date and time the object was initially created.
     */
    create_time?: string;
    /**
     * The capacity of a storage/ISO-Image/template/snapshot in GB.
     */
    capacity?: number;
    /**
     * The human-readable name of the location. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    location_name?: string;
    /**
     * Uses IATA airport code, which works as a location identifier.
     */
    location_iata?: string;
    /**
     * Uuid of the storage used to create this snapshot
     */
    parent_uuid?: string;
}
