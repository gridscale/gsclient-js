import type { ListenPortsByIpIndex } from './ListenPortsByIpIndex';
import type { PaasServiceCredentials } from './PaasServiceCredentials';
export declare type ServiceinPaasSecurityZone = Array<{
    /**
     * The UUID of an object is always unique, and refers to a specific object.
     */
    object_uuid?: string;
    listen_ports?: ListenPortsByIpIndex;
    /**
     * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    name?: string;
    /**
     * The template used to create the service, you can find an available list at the /service_templates endpoint.
     */
    service_template_uuid?: string;
    credentials?: PaasServiceCredentials;
    resources?: any;
    /**
     * The unique UUID of the Security Zone.
     */
    security_zone_uuid?: string;
    parameters?: any;
}>;
