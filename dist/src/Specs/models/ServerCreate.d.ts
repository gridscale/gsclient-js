export declare type ServerCreate = {
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
    hardware_profile?: ServerCreate.hardware_profile;
};
export declare namespace ServerCreate {
    /**
     * Specifies the hardware settings for the virtual machine.
     */
    enum hardware_profile {
        DEFAULT = "default",
        NESTED = "nested",
        LEGACY = "legacy",
        CISCO_CSR = "cisco_csr",
        SOPHOS_UTM = "sophos_utm",
        F5_BIGIP = "f5_bigip",
        Q35 = "q35",
        Q35_NESTED = "q35_nested"
    }
}
