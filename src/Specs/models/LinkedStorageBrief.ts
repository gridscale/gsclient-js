/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type LinkedStorageBrief = {
    /**
     * Indicates the speed of the storage. This may be (storage, storage_high or storage_insane).
     */
    storage_type?: string;
    /**
     * Defines the SCSI target ID. The SCSI defines transmission routes like Serial Attached SCSI (SAS), Fibre Channel and iSCSI. The target ID is a device (e.g. disk).
     */
    target?: number;
    /**
     * The SCSI bus id. The SCSI defines transmission routes like Serial Attached SCSI (SAS), Fibre Channel and iSCSI. Each SCSI device is addressed via a specific number. Each SCSI bus can have multiple SCSI devices connected to it.
     */
    bus?: number;
    /**
     * The capacity of a storage/ISO-Image/template/snapshot in GB.
     */
    capacity?: number;
    /**
     * If a template has been used that requires a license key (e.g. Windows Servers) this shows the product_no of the license (see the /prices endpoint for more details).
     */
    license_product_no?: number;
    /**
     * The UUID of an object is always unique, and refers to a specific object.
     */
    object_uuid?: string;
    /**
     * Defines the SCSI controller id. The SCSI defines transmission routes such as Serial Attached SCSI (SAS), Fibre Channel and iSCSI.
     */
    controller?: number;
    /**
     * Is the common SCSI abbreviation of the Logical Unit Number. A lun is a unique identifier for a single disk or a composite of disks.
     */
    lun?: number;
    /**
     * Defines the date and time the object was initially created.
     */
    create_time?: string;
    /**
     * The same as the object_uuid.
     */
    server_uuid?: string;
    /**
     * Indicates the UUID of the last used template on this storage (inherited from snapshots).
     */
    last_used_template?: string;
    /**
     * Defines if this object is the bootdevice. Storages, Networks and ISO-Images can have a bootdevice configured, but only one bootdevice per Storage, Network or ISO-Image. The boot order is as follows => Network > ISO-Image > Storage.
     */
    bootdevice?: boolean;
    /**
     * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    object_name?: string;
}
