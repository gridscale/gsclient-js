export declare type EventResponse = {
    events?: Array<{
        /**
         * Type of object (server, storage, IP) etc.
         */
        object_type?: string;
        /**
         * The UUID of the event.
         */
        request_uuid?: string;
        /**
         * The UUID of the objects the event was executed on.
         */
        object_uuid?: string;
        /**
         * The type of change.
         */
        activity?: string;
        /**
         * The type of request.
         */
        request_type?: string;
        /**
         * True or false, whether the request was successful or not.
         */
        request_status?: string;
        /**
         * A detailed description of the change.
         */
        change?: string;
        /**
         * Time the event was triggered.
         */
        timestamp?: string;
        /**
         * The UUID of the user that triggered the event.
         */
        user_uuid?: string;
    }>;
};
