/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Metrics } from './Metrics';
import type { MetricsValue } from './MetricsValue';

export type ServerMetrics = (Metrics & {
    /**
     * The UUID of an object is always unique, and refers to a specific object.
     */
    server_uuid?: string,
    core_usage?: MetricsValue,
    storage_read_iops?: MetricsValue,
    storage_write_iops?: MetricsValue,
});
