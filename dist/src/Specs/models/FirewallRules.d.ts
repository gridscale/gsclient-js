import type { FirewallV4inRule } from './FirewallV4inRule';
import type { FirewallV4outRule } from './FirewallV4outRule';
import type { FirewallV6inRule } from './FirewallV6inRule';
import type { FirewallV6outRule } from './FirewallV6outRule';
export declare type FirewallRules = {
    'rules-v6-in'?: FirewallV6inRule;
    'rules-v6-out'?: FirewallV6outRule;
    'rules-v4-in'?: FirewallV4inRule;
    'rules-v4-out'?: FirewallV4outRule;
};
