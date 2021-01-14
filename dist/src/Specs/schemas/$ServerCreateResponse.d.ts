export declare const $ServerCreateResponse: {
    properties: {
        server_uuid: {
            type: string;
            format: string;
        };
        object_uuid: {
            type: string;
            format: string;
        };
        request_uuid: {
            type: string;
            format: string;
        };
        network_uuids: {
            type: string;
            contains: {
                type: string;
                format: string;
            };
        };
        storage_uuids: {
            type: string;
            contains: {
                type: string;
                format: string;
            };
        };
        ipaddr_uuids: {
            type: string;
            contains: {
                type: string;
                format: string;
            };
        };
    };
};
