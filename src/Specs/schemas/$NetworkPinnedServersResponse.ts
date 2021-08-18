/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $NetworkPinnedServersResponse = {
    properties: {
        pinned_servers: {
            type: 'array',
            contains: {
                type: 'PinnedServer',
            },
        },
    },
};