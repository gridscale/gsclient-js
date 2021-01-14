/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * An object holding important values such as hostnames, passwords, and SSH keys. Creating a storage with a template is required either sshkey or password
 */
export type StorageCreateTemplatePassword = {
    /**
     * The UUID of a template (public or private).
     */
    template_uuid: string;
    /**
     * Hostname to set for the installed storage. The running server will use this as its hostname. Valid only for public Linux and Windows templates.
     */
    hostname?: string;
    /**
     * The root (Linux) or Administrator (Windows) password to set for the installed storage. Valid only for public templates. The password has to be either plaintext or a crypt string (modular crypt format - MCF).
     */
    password: string;
    /**
     * Password type (one of plain, crypt).
     */
    password_type: StorageCreateTemplatePassword.password_type;
}

export namespace StorageCreateTemplatePassword {

    /**
     * Password type (one of plain, crypt).
     */
    export enum password_type {
        PLAIN = 'plain',
        CRYPT = 'crypt',
    }


}
