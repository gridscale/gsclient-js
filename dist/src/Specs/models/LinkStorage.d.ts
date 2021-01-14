export declare type LinkStorage = {
    /**
     * The UUID of the storage you are requesting. If server's hardware profile is default, nested, q35 or q35_nested, you are allowed to attached 8 servers. only 2 storage are allowed to be attached to server with other hardware profile
     */
    object_uuid: string;
    /**
     * Whether the server will boot from this storage device or not.
     */
    bootdevice?: boolean;
};
