/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { PaasSecurityZonesRelation } from './PaasSecurityZonesRelation';

export type PaasSecurityZones = {
    /**
     * The human-readable name of the location. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    location_country?: string;
    relations?: PaasSecurityZonesRelation;
    /**
     * Defines the date and time the object was initially created.
     */
    create_time?: string;
    /**
     * Uses IATA airport code, which works as a location identifier.
     */
    location_iata?: string;
    /**
     * The UUID of an object is always unique, and refers to a specific object.
     */
    object_uuid?: string;
    /**
     * List of labels.
     */
    labels?: Array<string>;
    /**
     * The human-readable name of the location. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    location_name?: string;
    /**
     * Status indicates the status of the object.
     */
    status?: string;
    /**
     * Helps to identify which data-center an object belongs to.
     */
    location_uuid?: string;
    /**
     * Defines the date and time of the last object change.
     */
    change_time?: string;
    /**
     * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    name?: string;
}
