/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TaskEventLabel = {
    type?: string;
    description?: string;
    unique?: boolean;
    maxlength?: number;
    response_code?: number;
    schema?: {
        type?: string,
        description?: string,
        maxlength?: number,
    };
}
