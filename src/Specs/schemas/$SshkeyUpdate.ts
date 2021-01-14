/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $SshkeyUpdate = {
    properties: {
        name: {
            type: 'string',
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