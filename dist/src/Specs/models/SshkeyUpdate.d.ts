export declare type SshkeyUpdate = {
    /**
     * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    name?: string;
    /**
     * List of labels.
     */
    labels?: Array<string>;
    /**
     * The OpenSSH public key string (all key types are supported => ed25519, ecdsa, dsa, rsa, rsa1).
     */
    sshkey?: string;
};
