/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LoadbalancerinIp = {
    type: 'array',
    contains: {
        properties: {
            create_time: {
                type: 'string',
                format: 'date-time',
            },
            loadbalancer_uuid: {
                type: 'string',
            },
            loadbalancer_name: {
                type: 'string',
            },
        },
    },
};