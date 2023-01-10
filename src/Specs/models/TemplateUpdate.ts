/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TemplateUpdate = {
    /**
     * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    name?: string;
    /**
     * Allow/forbid other user to use this template. Correct access rights are required to make the request with this key
     */
    published?: boolean;
    /**
     * List of labels.
     */
    labels?: Array<string>;
}
