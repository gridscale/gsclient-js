/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $MarketplaceApplicationSetup = {
    properties: {
        cores: {
            type: 'number',
            maximum: 64,
            minimum: 1,
        },
        memory: {
            type: 'number',
            maximum: 192,
            minimum: 1,
        },
        capacity: {
            type: 'number',
            maximum: 16384,
            minimum: 1,
        },
    },
};