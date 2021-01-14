import type { FirewallRules } from './FirewallRules';
export declare type FirewallCreate = {
    name: string;
    labels?: string;
    rules: FirewallRules;
};
