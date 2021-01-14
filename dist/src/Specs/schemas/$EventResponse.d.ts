export declare const $EventResponse: {
    properties: {
        events: {
            type: string;
            contains: {
                properties: {
                    object_type: {
                        type: string;
                    };
                    request_uuid: {
                        type: string;
                        format: string;
                    };
                    object_uuid: {
                        type: string;
                        format: string;
                    };
                    activity: {
                        type: string;
                    };
                    request_type: {
                        type: string;
                    };
                    request_status: {
                        type: string;
                    };
                    change: {
                        type: string;
                    };
                    timestamp: {
                        type: string;
                        format: string;
                    };
                    user_uuid: {
                        type: string;
                        format: string;
                    };
                };
            };
        };
    };
};
