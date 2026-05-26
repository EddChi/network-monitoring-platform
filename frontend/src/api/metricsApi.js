import api from "./api";

export function getAgentMetrics(agentId) {
    return api.get(`/metrics/agent/${agentId}`);
}

export function getAgentMetricsSummary(agentId) {
    return api.get(`/metrics/agent/${agentId}/summary`);
}