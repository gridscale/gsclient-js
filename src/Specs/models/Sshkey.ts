/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Sshkey = {
    /**
     * List of labels.
     */
    labels?: Array<string>;
    /**
     * The User-UUID of the account which created this SSH Key.
     */
    user_uuid?: string;
    /**
     * Defines the date and time the object was initially created.
     */
    create_time?: string;
    /**
     * Status indicates the status of the object.
     */
    status?: string;
    /**
     * Defines the date and time of the last object change.
     */
    change_time?: string;
    /**
     * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    name?: string;
    /**
     * The UUID of an object is always unique, and refers to a specific object.
     */
    object_uuid?: string;
    /**
     * The OpenSSH public key string (all key types are supported => ed25519, ecdsa, dsa, rsa, rsa1).
     */
    sshkey?: string;
}
