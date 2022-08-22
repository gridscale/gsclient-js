/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { LocationChangeRequested } from './LocationChangeRequested';
import { LocationFeatures } from './LocationFeatures';
import { LocationInformation } from './LocationInformation';

export type Location = {
    /**
     * Uses IATA airport code, which works as a location identifier.
     */
    iata?: string;
    /**
     * List of labels.
     */
    labels?: Array<string>;
    /**
     * The human-readable name of the location. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    name?: string;
    /**
     * The UUID of an object is always unique, and refers to a specific object.
     */
    object_uuid?: string;
    /**
     * Used to uniquely identify the Hybrid Core.
     */
    hybrid_core_uuid?: string;
    /**
     * The ID of a Hybrid Core.
     */
    hybrid_core_id?: string;
    /**
     * The human-readable name of the location. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    country?: string;
    active?: boolean;
    change_requested?: LocationChangeRequested;
    /**
     * The number of dedicated cpunodes to assigne to the private location.
     */
    cpunode_count?: number;
    /**
     * If this location is publicly available or a private location.
     */
    public?: boolean;
    /**
     * The product number of a valid and available dedicated cpunode article.
     */
    product_no?: number;
    location_information?: LocationInformation;
    features?: LocationFeatures;
}
