/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { MarketplaceApplicationMetadata } from './MarketplaceApplicationMetadata';

export type MarketplaceApplicationCreate = {
    /**
     * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    name: string;
    /**
     * Path to the images for the application, must be in .gz format and started with s3//
     */
    object_storage_path: string;
    category?: 'CMS' | 'project management' | 'Adminpanel' | 'Collaboration' | 'Cloud Storage' | 'Archiving';
    /**
     * whether you want to publish your application or not
     */
    publish?: boolean;
    /**
     * Application's setup, consist the number of resource for creating the application
     */
    setup: {
        /**
         * Number of server cores.
         */
        cores: number,
        /**
         * Number of server memory.
         */
        memory: number,
        /**
         * The capacity of a storage in GB.
         */
        capacity: number,
    };
    metadata?: MarketplaceApplicationMetadata;
}
