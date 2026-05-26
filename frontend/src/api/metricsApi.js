import api from "./api";

export function getAgentMetricsSummary(agentId) {
    return api.get(`/metrics/agent/${agentId}/summary`);
}