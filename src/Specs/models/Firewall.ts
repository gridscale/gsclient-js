/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FirewallRelation } from './FirewallRelation';
import type { FirewallRules } from './FirewallRules';

export type Firewall = {
    /**
     * Status indicates the status of the object.
     */
    status?: string;
    /**
     * List of labels.
     */
    labels?: Array<string>;
    /**
     * The UUID of an object is always unique, and refers to a specific object.
     */
    object_uuid?: string;
    /**
     * Defines the date and time of the last object change.
     */
    change_time?: string;
    rules?: FirewallRules;
    /**
     * Defines the date and time the object was initially created.
     */
    create_time?: string;
    /**
     * If this is a private or public Firewall-Template.
     */
    private?: boolean;
    relations?: FirewallRelation;
    /**
     * Description of the ISO-Image release.
     */
    description?: string;
    /**
     * The human-readable name of the location. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    location_name?: string;
    /**
     * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    name?: string;
}
