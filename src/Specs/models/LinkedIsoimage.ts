/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type LinkedIsoimage = {
    /**
     * Whether the server boots from this iso image or not.
     */
    bootdevice?: boolean;
    /**
     * Whether the isoimage is private or not.
     */
    private?: boolean;
    /**
     * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    object_name?: string;
    /**
     * Defines the date and time the object was initially created.
     */
    create_time?: string;
    /**
     * The UUID of an object is always unique, and refers to a specific object.
     */
    object_uuid?: string;
}
