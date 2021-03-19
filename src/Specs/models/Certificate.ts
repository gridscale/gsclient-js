/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Certificate = {
    /**
     * The UUID of an object is always unique, and refers to a specific object.
     */
    object_uuid?: string;
    /**
     * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    name?: string;
    /**
     * The common domain name of the SSL certificate.
     */
    common_name?: string;
    /**
     * Defines the date and time the object was initially created.
     */
    create_time?: string;
    /**
     * Defines the date and time of the last object change.
     */
    change_time?: string;
    /**
     * Status indicates the status of the object.
     */
    status?: string;
    /**
     * Defines the date after which the certificate does not valid
     */
    not_valid_after?: string;
    /**
     * Defines a list of a unique identifier generated from the MD5, SHA-1, and SHA-256 fingerprints of the certificate.
     */
    fingerprints?: string;
    /**
     * List of labels.
     */
    labels?: Array<string>;
}
