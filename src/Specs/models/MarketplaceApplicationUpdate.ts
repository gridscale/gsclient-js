/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { MarketplaceApplicationMetadata } from './MarketplaceApplicationMetadata';
import { MarketplaceApplicationSetup } from './MarketplaceApplicationSetup';

export type MarketplaceApplicationUpdate = {
    /**
     * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    name?: string;
    /**
     * List of labels.
     */
    labels?: Array<string>;
    /**
     * Path to the images for the application, must be in .gz format and started with s3//
     */
    object_storage_path?: string;
    category?: 'CMS' | 'project management' | 'Adminpanel' | 'Collaboration' | 'Cloud Storage' | 'Archiving';
    /**
     * Requesting the template to be published
     */
    publish?: boolean;
    setup?: MarketplaceApplicationSetup;
    metadata?: MarketplaceApplicationMetadata;
}
