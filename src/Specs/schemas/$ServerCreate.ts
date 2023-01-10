/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ServerCreate = {
    properties: {
        name: {
            type: 'string',
            isRequired: true,
        },
        cores: {
            type: 'number',
            isRequired: true,
        },
        memory: {
            type: 'number',
            isRequired: true,
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        status: {
            type: 'string',
        },
        availability_zone: {
            type: 'string',
        },
        auto_recovery: {
            type: 'string',
        },
        hardware_profile: {
            type: 'Enum',
        },
        hardware_profile_config: {
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