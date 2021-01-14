import type { MarketplaceApplicationMetadata } from './MarketplaceApplicationMetadata';
export declare type MarketplaceApplicationCreate = {
    /**
     * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    name: string;
    /**
     * Path to the images for the application, must be in .gz format and started with s3//
     */
    object_storage_path: string;
    category?: MarketplaceApplicationCreate.category;
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
        cores: number;
        /**
         * Number of server memory.
         */
        memory: number;
        /**
         * The capacity of a storage in GB.
         */
        capacity: number;
    };
    metadata?: MarketplaceApplicationMetadata;
};
export declare namespace MarketplaceApplicationCreate {
    enum category {
        CMS = "CMS",
        PROJECT_MANAGEMENT = "project management",
        ADMINPANEL = "Adminpanel",
        COLLABORATION = "Collaboration",
        CLOUD_STORAGE = "Cloud Storage",
        ARCHIVING = "Archiving"
    }
}
