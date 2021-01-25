/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type EventResponse = {
    events?: Array<{
        /**
         * Type of object (server, storage, IP) etc.
         */
        object_type?: string,
        /**
         * The UUID of the event.
         */
        request_uuid?: string,
        /**
         * The UUID of the objects the event was executed on.
         */
        object_uuid?: string,
        /**
         * The type of change.
         */
        activity?: string,
        /**
         * The type of request.
         */
        request_type?: string,
        /**
         * True or false, whether the request was successful or not.
         */
        request_status?: string,
        /**
         * A detailed description of the change.
         */
        change?: string,
        /**
         * Time the event was triggered.
         */
        timestamp?: string,
        /**
         * The UUID of the user that triggered the event. Empty in case this event was not initiated by a user.
         */
        user_uuid?: string,
        /**
         * The user that triggered the event. Usually the user's email if the event was triggered by request of a user, otherwise a short descriptive name of the system component responsible.
         */
        initiator?: string,
    }>;
}
