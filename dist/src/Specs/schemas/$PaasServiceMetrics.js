"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$PaasServiceMetrics = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$PaasServiceMetrics = {
    type: 'all-of',
    contains: [{
            type: 'Metrics',
        }, {
            properties: {
                paas_service_uuid: {
                    type: 'string',
                    format: 'uuid',
                },
                core_usage: {
                    type: 'MetricsValue',
                },
                storage_size: {
                    type: 'MetricsValue',
                },
            },
        }],
};

//# sourceMappingURL=$PaasServiceMetrics.js.map
