export declare type AccessKeyCreateResponse = {
    access_key?: {
        /**
         * The object storage secret_key.
         */
        secret_key?: string;
        /**
         * The object storage access_key.
         */
        access_key?: string;
    };
    /**
     * The unique id for the request.
     */
    request_uuid?: string;
};
