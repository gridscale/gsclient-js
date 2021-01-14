/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FirewallRules } from './FirewallRules';

export type FirewallCreate = {
    name: string;
    labels?: string;
    rules: FirewallRules;
}
