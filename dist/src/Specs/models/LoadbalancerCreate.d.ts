export declare type LoadbalancerCreate = {
    /**
     * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    name: string;
    /**
     * An array of objects containing the forwarding rules for the Load balancer
     */
    forwarding_rules: Array<any>;
    /**
     * The servers that this Load balancer can communicate with
     */
    backend_servers: Array<any>;
    /**
     * Status indicates the status of the object.
     */
    status?: string;
    /**
     * Whether the Load balancer is forced to redirect requests from HTTP to HTTPS
     */
    redirect_http_to_https: boolean;
    /**
     * List of labels.
     */
    labels: Array<string>;
    /**
     * The algorithm used to process requests. Accepted values: roundrobin/leastconn.
     */
    algorithm: string;
    /**
     * The UUID of the IPv4 address the Load balancer will listen to for incoming requests.
     */
    listen_ipv4_uuid: string;
    /**
     * The UUID of the IPv6 address the Load balancer will listen to for incoming requests.
     */
    listen_ipv6_uuid: string;
};
