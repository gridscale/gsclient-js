/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LinkedIpsGetResponse = {
    properties: {
        ip_relations: {
            type: 'array',
            contains: {
                type: 'LinkedIpBrief',
            },
        },
    },
};