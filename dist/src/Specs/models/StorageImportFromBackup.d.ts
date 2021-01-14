export declare type StorageImportFromBackup = {
    backup: {
        /**
         * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
         */
        name?: string;
        /**
         * The UUID of a backup is always unique, and refers to a specific object.
         */
        backup_uuid: string;
    };
};
