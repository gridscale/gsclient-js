/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Metrics } from './Metrics';
import type { MetricsValue } from './MetricsValue';

export type PaasServiceMetrics = (Metrics & {
    /**
     * The UUID of an object is always unique, and refers to a specific object.
     */
    paas_service_uuid?: string,
    core_usage?: MetricsValue,
    storage_size?: MetricsValue,
});
