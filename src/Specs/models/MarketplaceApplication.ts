/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MarketplaceApplication = {
    /**
     * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    name?: string;
    /**
     * unique hash to allow user to import the self-created marketplace application
     */
    unique_hash?: string;
    /**
     * Path to the images of the application
     */
    object_storage_path?: string;
    /**
     * Whether the you are the owner of application or not.
     */
    application_owner?: boolean;
    setup?: {
        /**
         * The capacity of a storage in GB.
         */
        capacity?: number,
        /**
         * Number of server cores.
         */
        cores?: number,
        /**
         * Number of server memory.
         */
        memory?: number,
    };
    /**
     * Whether the template is published by the partner to their tenant.
     */
    published?: boolean;
    /**
     * The date when the template is published into other tenant in the same partner.
     */
    published_date?: string;
    /**
     * Whether the tenants want their template to be published or not.
     */
    publish_requested?: boolean;
    /**
     * The date when the tenant requested their template to be published.
     */
    publish_requested_date?: string;
    /**
     * Whether a partner wants their tenant template published to other partners.
     */
    publish_global_requested?: boolean;
    /**
     * The date when a partner requested their tenants template to be published.
     */
    publish_global_requested_date?: string;
    /**
     * Whether a template is published to other partner or not.
     */
    published_global?: boolean;
    /**
     * The date when a template is published to other partner.
     */
    published_global_date?: string;
    /**
     * Category of marketplace application
     */
    category?: MarketplaceApplication.category;
    /**
     * Metadata of the Application
     */
    metadata?: {
        license?: string,
        os?: string,
        components?: Array<string>,
        overview?: string,
        hints?: string,
        term_of_use?: string,
        icon?: string,
        features?: string,
        terms_of_use?: string,
        authors?: string,
        advices?: string,
    };
    /**
     * Defines the date and time of the last object change.
     */
    change_time?: string;
    /**
     * Defines the date and time the object was initially created.
     */
    create_time?: string;
    /**
     * List of labels.
     */
    labels?: Array<string>;
    /**
     * The UUID of an object is always unique, and refers to a specific object.
     */
    object_uuid?: string;
    /**
     * Status indicates the status of the object.
     */
    status?: string;
    /**
     * the type of template
     */
    application_type?: string;
}

export namespace MarketplaceApplication {

    /**
     * Category of marketplace application
     */
    export enum category {
        CMS = 'CMS',
        PROJECT_MANAGEMENT = 'project management',
        ADMINPANEL = 'Adminpanel',
        COLLABORATION = 'Collaboration',
        CLOUD_STORAGE = 'Cloud Storage',
        ARCHIVING = 'Archiving',
    }


}
