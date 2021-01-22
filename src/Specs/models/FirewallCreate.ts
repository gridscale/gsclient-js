/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { FirewallRules } from './FirewallRules';

export type FirewallCreate = {
    name: string;
    labels?: string;
    rules: FirewallRules;
}
