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
     *
     * Note: hardware_profile and hardware_profile_config parameters can't be used at the same time.
     *
     */
    hardware_profile?: 'default' | 'nested' | 'legacy' | 'cisco_csr' | 'sophos_utm' | 'f5_bigip' | 'q35';
    /**
     * Specifies the custom hardware settings for the virtual machine.
     *
     * Note: hardware_profile and hardware_profile_config parameters can't be used at the same time.
     *
     */
    hardware_profile_config?: {
        machinetype?: 'i440fx' | 'q35_bios' | 'q35_uefi',
        storage_device?: 'ide' | 'sata' | 'virtio_scsi' | 'virtio_block',
        usb_controller?: 'nec_xhci' | 'piix3_uhci',
        nested_virtualization?: boolean,
        hyperv_extensions?: boolean,
        network_model?: 'e1000' | 'e1000e' | 'virtio' | 'vmxnet3',
        serial_interface?: boolean,
        server_renice?: boolean,
    };
    /**
     * For system configuration on first boot. May contain cloud-config data or shell scripting, encoded as base64 string. Supported tools are cloud-init, Cloudbase-init, and Ignition.
     */
    user_data?: string;
}
