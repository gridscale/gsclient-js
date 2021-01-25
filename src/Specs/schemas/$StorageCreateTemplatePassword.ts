/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $StorageCreateTemplatePassword = {
    properties: {
        template_uuid: {
            type: 'string',
            isRequired: true,
            format: 'uuid',
        },
        hostname: {
            type: 'string',
        },
        password: {
            type: 'string',
            isRequired: true,
        },
        password_type: {
            type: 'Enum',
            isRequired: true,
        },
    },
};