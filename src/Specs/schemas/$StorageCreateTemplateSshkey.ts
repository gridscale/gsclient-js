/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $StorageCreateTemplateSshkey = {
    properties: {
        template_uuid: {
            type: 'string',
            isRequired: true,
            format: 'uuid',
        },
        hostname: {
            type: 'string',
        },
        sshkeys: {
            type: 'array',
            contains: {
                type: 'string',
            },
            isRequired: true,
        },
    },
};