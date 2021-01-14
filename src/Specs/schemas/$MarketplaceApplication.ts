/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $MarketplaceApplication = {
    properties: {
        name: {
            type: 'string',
        },
        unique_hash: {
            type: 'string',
        },
        object_storage_path: {
            type: 'string',
        },
        application_owner: {
            type: 'boolean',
        },
        setup: {
            properties: {
                capacity: {
                    type: 'number',
                },
                cores: {
                    type: 'number',
                },
                memory: {
                    type: 'number',
                },
            },
        },
        published: {
            type: 'boolean',
        },
        published_date: {
            type: 'string',
            format: 'date-time',
        },
        publish_requested: {
            type: 'boolean',
        },
        publish_requested_date: {
            type: 'string',
            format: 'date-time',
        },
        publish_global_requested: {
            type: 'boolean',
        },
        publish_global_requested_date: {
            type: 'string',
            format: 'date-time',
        },
        published_global: {
            type: 'boolean',
        },
        published_global_date: {
            type: 'string',
            format: 'date-time',
        },
        category: {
            type: 'Enum',
        },
        metadata: {
            properties: {
                license: {
                    type: 'string',
                },
                os: {
                    type: 'string',
                },
                components: {
                    type: 'array',
                    contains: {
                        type: 'string',
                    },
                },
                overview: {
                    type: 'string',
                },
                hints: {
                    type: 'string',
                },
                term_of_use: {
                    type: 'string',
                },
                icon: {
                    type: 'string',
                },
                features: {
                    type: 'string',
                },
                terms_of_use: {
                    type: 'string',
                },
                authors: {
                    type: 'string',
                },
                advices: {
                    type: 'string',
                },
            },
        },
        change_time: {
            type: 'string',
            format: 'date-time',
        },
        create_time: {
            type: 'string',
            format: 'date-time',
        },
        labels: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        object_uuid: {
            type: 'string',
            format: 'uuid',
        },
        status: {
            type: 'string',
        },
        application_type: {
            type: 'string',
        },
    },
};