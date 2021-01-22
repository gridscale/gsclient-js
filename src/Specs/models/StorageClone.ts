/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type StorageClone = {
    /**
     * The root (Linux) or Administrator (Windows) password to set for the installed storage. Valid only for public templates. The password has to be either plaintext or a crypt string (modular crypt format - MCF).
     */
    password?: string;
    /**
     * Password type (one of plain, crypt).
     */
    password_type?: 'plain' | 'crypt';
    /**
     * List of SSH Keys uuid.
     */
    sshkeys?: Array<string>;
}
