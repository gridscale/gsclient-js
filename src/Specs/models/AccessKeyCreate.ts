/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AccessKeyCreate = {
    /**
     * Comment for the access_key
     */
    comment?: string;
    /**
     * If a user_uuid is sent along with the request, a user-specific key will get created. If no user_uuid is sent along a user with write-access to the contract will still only create a user-specific key for themselves while a user with admin-access to the contract will create a contract-level admin key.
     */
    user_uuid?: string;
}
