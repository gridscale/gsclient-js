/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Bucket = {
    /**
     * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    name?: string;
    /**
     * The current usage of the bucket.
     */
    ussage?: {
        /**
         * The size of the the bucket (in kb).
         */
        size_kb?: number,
        /**
         * The number of files in the bucket.
         */
        num_objects?: number,
    };
}
