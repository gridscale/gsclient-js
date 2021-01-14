/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $StorageClone = {
    properties: {
        password: {
            type: 'string',
        },
        password_type: {
            type: 'Enum',
        },
        sshkeys: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
    },
};