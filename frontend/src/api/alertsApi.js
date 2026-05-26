import api from "./api";

export function getAlerts() {
    return api.get("/alerts");
}

export function getAlertsByAgentId(agentId) {
    return api.get(`/alerts/agent/${agentId}`);
}