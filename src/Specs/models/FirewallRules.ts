/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { FirewallV4inRule } from './FirewallV4inRule';
import { FirewallV4outRule } from './FirewallV4outRule';
import { FirewallV6inRule } from './FirewallV6inRule';
import { FirewallV6outRule } from './FirewallV6outRule';

export type FirewallRules = {
    'rules-v6-in'?: FirewallV6inRule;
    'rules-v6-out'?: FirewallV6outRule;
    'rules-v4-in'?: FirewallV4inRule;
    'rules-v4-out'?: FirewallV4outRule;
}
