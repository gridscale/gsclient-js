export declare const $MarketplaceApplication: {
    properties: {
        name: {
            type: string;
        };
        unique_hash: {
            type: string;
        };
        object_storage_path: {
            type: string;
        };
        application_owner: {
            type: string;
        };
        setup: {
            properties: {
                capacity: {
                    type: string;
                };
                cores: {
                    type: string;
                };
                memory: {
                    type: string;
                };
            };
        };
        published: {
            type: string;
        };
        published_date: {
            type: string;
            format: string;
        };
        publish_requested: {
            type: string;
        };
        publish_requested_date: {
            type: string;
            format: string;
        };
        publish_global_requested: {
            type: string;
        };
        publish_global_requested_date: {
            type: string;
            format: string;
        };
        published_global: {
            type: string;
        };
        published_global_date: {
            type: string;
            format: string;
        };
        category: {
            type: string;
        };
        metadata: {
            properties: {
                license: {
                    type: string;
                };
                os: {
                    type: string;
                };
                components: {
                    type: string;
                    contains: {
                        type: string;
                    };
                };
                overview: {
                    type: string;
                };
                hints: {
                    type: string;
                };
                term_of_use: {
                    type: string;
                };
                icon: {
                    type: string;
                };
                features: {
                    type: string;
                };
                terms_of_use: {
                    type: string;
                };
                authors: {
                    type: string;
                };
                advices: {
                    type: string;
                };
            };
        };
        change_time: {
            type: string;
            format: string;
        };
        create_time: {
            type: string;
            format: string;
        };
        labels: {
            type: string;
            contains: {
                type: string;
            };
        };
        object_uuid: {
            type: string;
            format: string;
        };
        status: {
            type: string;
        };
        application_type: {
            type: string;
        };
    };
};
