export declare type IsoimageCreate = {
    /**
     * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    name: string;
    /**
     * The source URL from which the ISO-Image should be downloaded.
     */
    source_url: string;
    /**
     * List of labels.
     */
    labels?: Array<string>;
};
