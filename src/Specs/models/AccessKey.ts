/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AccessKey = {
    /**
     * The object storage secret_key.
     */
    secret_key?: string;
    /**
     * The object storage access_key.
     */
    access_key?: string;
    /**
     * A comment for this access_key.
     */
    comment?: string;
    /**
     * user of access_key
     */
    user_uuid?: string;
}
