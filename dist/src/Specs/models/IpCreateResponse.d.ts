export declare type IpCreateResponse = {
    /**
     * Request user ID.
     */
    request_uuid?: string;
    /**
     * The IP Address (v4 or v6).
     */
    ip?: string;
    /**
     * The UUID of an object is always unique, and refers to a specific object.
     */
    object_uuid?: string;
    /**
     * The IP prefix.
     */
    prefix?: string;
};
