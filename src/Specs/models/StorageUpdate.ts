/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type StorageUpdate = {
    /**
     * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    name?: string;
    /**
     * The Capacity of the Storage in GB.
     */
    capacity?: string;
    /**
     * List of labels.
     */
    labels?: Array<string>;
    /**
     * Updating the storage_type parameter allows you to increase the speed of your storage. Downgrading is not supported
     */
    storage_type?: 'storage' | 'storage_high' | 'storage_insane';
}
