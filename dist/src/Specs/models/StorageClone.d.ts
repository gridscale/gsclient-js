export declare type StorageClone = {
    /**
     * The root (Linux) or Administrator (Windows) password to set for the installed storage. Valid only for public templates. The password has to be either plaintext or a crypt string (modular crypt format - MCF).
     */
    password?: string;
    /**
     * Password type (one of plain, crypt).
     */
    password_type?: StorageClone.password_type;
    /**
     * List of SSH Keys uuid.
     */
    sshkeys?: Array<string>;
};
export declare namespace StorageClone {
    /**
     * Password type (one of plain, crypt).
     */
    enum password_type {
        PLAIN = "plain",
        CRYPT = "crypt"
    }
}
