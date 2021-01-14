/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type LinkedIpBrief = {
    /**
     * The UUID of an object is always unique, and refers to a specific object.
     */
    object_uuid?: string;
    /**
     * Either 4 or 6
     */
    family?: LinkedIpBrief.family;
    /**
     * The prefix of the IP Address.
     */
    prefix?: string;
    /**
     * Defines the date and time the object was initially created.
     */
    create_time?: string;
    /**
     * The UUID of the server that this IP is attached to.
     */
    server_uuid?: string;
    /**
     * The IP Address (v4 or v6)
     */
    ip?: string;
}

export namespace LinkedIpBrief {

    /**
     * Either 4 or 6
     */
    export enum family {
        _4 = 4,
        _6 = 6,
    }


}
