/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GPUFlavorGetProperties = {
    /**
     * The UUID of an object is always unique, and refers to a specific object.
     */
    object_uuid?: string;
    /**
     * The UUID of a specific image for gpu_flavor.
     */
    image_uuid?: string;
    /**
     * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    name?: string;
    memory_per_slice?: number;
    graphics_cards_per_slice?: number;
    cores_per_slice?: number;
    local_storage_capacity_per_slice?: number;
    graphics_card_identifier?: string;
    max_slices?: number;
    product_no?: number;
    /**
     * Custom hardware settings for the virtual machine.
     *
     */
    hardware_profile_configuration?: {
        machinetype?: 'i440fx' | 'q35_bios' | 'q35_uefi',
        storage_device?: 'ide' | 'sata' | 'virtio_scsi' | 'virtio_block',
        usb_controller?: 'nec_xhci' | 'piix3_uhci',
        nested_virtualization?: boolean,
        hyperv_extensions?: boolean,
        network_model?: 'e1000' | 'e1000e' | 'virtio' | 'vmxnet3',
        serial_interface?: boolean,
        server_renice?: boolean,
    };
}
