/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { FirewallRules } from './FirewallRules';

export type FirewallUpdate = {
    name?: string;
    /**
     * List of labels.
     */
    labels?: Array<string>;
    rules?: FirewallRules;
}
