/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type LinkedIp = {
    /**
     * The UUID of an object is always unique, and refers to a specific object.
     */
    object_uuid?: string;
    /**
     * Either 4 or 6
     */
    family?: 4 | 6;
    /**
     * The prefix of the IP Address.
     */
    prefix?: string;
    /**
     * Defines the date and time the object was initially created.
     */
    create_time?: string;
    ip?: string;
}
