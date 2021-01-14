export declare type LinkedIp = {
    /**
     * The UUID of an object is always unique, and refers to a specific object.
     */
    object_uuid?: string;
    /**
     * Either 4 or 6
     */
    family?: LinkedIp.family;
    /**
     * The prefix of the IP Address.
     */
    prefix?: string;
    /**
     * Defines the date and time the object was initially created.
     */
    create_time?: string;
    ip?: string;
};
export declare namespace LinkedIp {
    /**
     * Either 4 or 6
     */
    enum family {
        _4 = 4,
        _6 = 6
    }
}
