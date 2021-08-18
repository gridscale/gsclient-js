/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ServerCreate = {
    /**
     * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    name: string;
    /**
     * The number of server cores.
     */
    cores: number;
    /**
     * The amount of server memory in GB.
     */
    memory: number;
    /**
     * List of labels.
     */
    labels?: Array<string>;
    /**
     * Status indicates the status of the object.
     */
    status?: string;
    /**
     * Defines which Availability-Zone the Server is placed.
     */
    availability_zone?: string;
    /**
     * If the server should be auto-started in case of a failure (default=true).
     */
    auto_recovery?: string;
    /**
     * Specifies the hardware settings for the virtual machine.
     */
    hardware_profile?: 'default' | 'nested' | 'legacy' | 'cisco_csr' | 'sophos_utm' | 'f5_bigip' | 'q35';
}
