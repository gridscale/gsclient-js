/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { ListenPortsByIpIndex } from './ListenPortsByIpIndex';

export type PaasServicesinNetwork = Array<{
    /**
     * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    object_name?: string,
    /**
     * The UUID of an object is always unique, and refers to a specific object.
     */
    object_uuid?: string,
    /**
     * The template used to create the service, you can find an available list at the /service_templates endpoint.
     */
    service_template_uuid?: string,
    /**
     * The template service's category used to create the service
     */
    service_template_category?: string,
    listen_ports?: ListenPortsByIpIndex,
}>;