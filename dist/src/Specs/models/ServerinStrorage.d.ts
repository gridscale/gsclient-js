export declare type ServerinStrorage = Array<{
    /**
     * Whether the server boots from this iso image or not.
     */
    bootdevice?: boolean;
    /**
     * The SCSI bus id. The SCSI defines transmission routes like Serial Attached SCSI (SAS), Fibre Channel and iSCSI. Each SCSI device is addressed via a specific number. Each SCSI bus can have multiple SCSI devices connected to it.
     */
    bus?: number;
    /**
     * Defines the SCSI controller id. The SCSI defines transmission routes such as Serial Attached SCSI (SAS), Fibre Channel and iSCSI.
     */
    controller?: number;
    /**
     * Defines the date and time the object was initially created.
     */
    create_time?: string;
    /**
     * Is the common SCSI abbreviation of the Logical Unit Number. A lun is a unique identifier for a single disk or a composite of disks.
     */
    lun?: number;
    /**
     * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    object_name?: string;
    /**
     * The UUID of an object is always unique, and refers to a specific object.
     */
    object_uuid?: string;
    /**
     * Defines the SCSI target ID. The SCSI defines transmission routes like Serial Attached SCSI (SAS), Fibre Channel and iSCSI. The target ID is a device (e.g. disk).
     */
    target?: number;
}>;
