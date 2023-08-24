/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $GPUFlavorGetProperties = {
    properties: {
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        image_uuid: {
            type: 'string',
            format: 'uuid',
        },
        name: {
            type: 'string',
        },
        memory_per_slice: {
            type: 'number',
        },
        graphics_cards_per_slice: {
            type: 'number',
        },
        cores_per_slice: {
            type: 'number',
        },
        local_storage_capacity_per_slice: {
            type: 'number',
        },
        graphics_card_identifier: {
            type: 'string',
        },
        max_slices: {
            type: 'number',
        },
        product_no: {
            type: 'number',
        },
        hardware_profile_configuration: {
            properties: {
                machinetype: {
                    type: 'Enum',
                },
                storage_device: {
                    type: 'Enum',
                },
                usb_controller: {
                    type: 'Enum',
                },
                nested_virtualization: {
                    type: 'boolean',
                },
                hyperv_extensions: {
                    type: 'boolean',
                },
                network_model: {
                    type: 'Enum',
                },
                serial_interface: {
                    type: 'boolean',
                },
                server_renice: {
                    type: 'boolean',
                },
            },
        },
    },
};