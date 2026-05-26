import api from "./api";

export function getEventsByAgentId(agentId) {
    return api.get(`/events/agent/${agentId}`);
}