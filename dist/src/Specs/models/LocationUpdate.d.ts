export declare type LocationUpdate = {
    /**
     * The human-readable name of the object. It supports the full UTF-8 charset, with a maximum of 64 characters.
     */
    name?: string;
    /**
     * List of labels.
     */
    labels?: Array<string>;
    /**
     * The OpenSSH public key string (all key types are supported => ed25519, ecdsa, dsa, rsa, rsa1).
     */
    cpunode_count?: string;
};
