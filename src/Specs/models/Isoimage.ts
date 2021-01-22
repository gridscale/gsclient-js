/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { IsoimageRelation } from './IsoimageRelation';

export type Isoimage = {
    /**
     * The UUID of an object is always unique, and refers to a specific object.
     */
    object_uuid?: string;
    relations?: IsoimageRelation;
    /**
     * Description of the ISO-Image release.
     */
    description?: string;
    /**
     * The human-readable name of the location. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    location_name?: string;
    /**
     * Contains the source URL of the ISO-Image that it was originally fetched from.
     */
    source_url?: string;
    /**
     * List of labels.
     */
    labels?: Array<string>;
    /**
     * Uses IATA airport code, which works as a location identifier.
     */
    location_iata?: string;
    /**
     * Helps to identify which data-center an object belongs to.
     */
    location_uuid?: string;
    /**
     * Status indicates the status of the object.
     */
    status?: string;
    /**
     * Defines the date and time the object was initially created.
     */
    create_time?: string;
    /**
     * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    name?: string;
    /**
     * Upstream version of the ISO-Image release
     */
    version?: string;
    /**
     * The human-readable name of the location. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    location_country?: string;
    /**
     * Total minutes the object has been running.
     */
    usage_in_minutes?: number;
    /**
     * Whether the ISO-Image is private or not.
     */
    private?: boolean;
    /**
     * Defines the date and time of the last object change.
     */
    change_time?: string;
    /**
     * The capacity of a storage/ISO-Image/template/snapshot in GB.
     */
    capacity?: number;
    /**
     * Deprecated
     */
    current_price?: number;
}
