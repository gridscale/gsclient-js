export declare const $ServerMetrics: {
    type: string;
    contains: ({
        type: string;
        properties?: undefined;
    } | {
        properties: {
            server_uuid: {
                type: string;
                format: string;
            };
            core_usage: {
                type: string;
            };
            storage_read_iops: {
                type: string;
            };
            storage_write_iops: {
                type: string;
            };
        };
        type?: undefined;
    })[];
};
