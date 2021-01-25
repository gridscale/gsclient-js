/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * An object holding important values such as hostnames, passwords, and SSH keys. Creating a storage with a template is required either sshkey or password
 */
export type StorageCreateTemplateSshkey = {
    /**
     * The UUID of a template (public or private).
     */
    template_uuid: string;
    /**
     * Hostname to set for the installed storage. The running server will use this as its hostname. Valid only for public Linux and Windows templates.
     */
    hostname?: string;
    /**
     * List of SSH Keys uuid.
     */
    sshkeys: Array<string>;
}
