/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RulesProperties = {
    /**
     * Either udp or tcp
     */
    protocol: RulesProperties.protocol;
    /**
     * A Number between 1 and 65535, port ranges are seperated by a colon for FTP.
     */
    dst_port?: any;
    /**
     * A Number between 1 and 65535, port ranges are seperated by a colon for FTP.
     */
    src_port?: any;
    src_cidr?: string;
    /**
     * This defines what the firewall will do. Either accept or drop.
     */
    action: RulesProperties.action;
    comment?: string;
    /**
     * Either an IPv4/6 address or and IP Network in CIDR format. If this field is empty then all IPs have access to this service.
     */
    dst_cidr?: string;
    /**
     * The order at which the firewall will compare packets against its rules, a packet will be compared against the first rule, it will either allow it to pass or block it and it won t be matched against any other rules. However, if it does no match the rule, then it will proceed onto rule 2. Packets that do not match any rules are blocked by default.
     */
    order: string;
}

export namespace RulesProperties {

    /**
     * Either udp or tcp
     */
    export enum protocol {
        UDP = 'udp',
        TCP = 'tcp',
    }

    /**
     * This defines what the firewall will do. Either accept or drop.
     */
    export enum action {
        ACCEPT = 'accept',
        DROP = 'drop',
    }


}
