/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $SshkeyCreate = {
    properties: {
        name: {
            type: 'string',
            isRequired: true,
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        sshkey: {
            type: 'string',
        },
    },
};