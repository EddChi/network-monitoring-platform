import api from "./api";

export function getAgents() {
    return api.get("/agents");
}

export function getAgentById(id) {
    return api.get(`/agents/${id}`);
}

export function searchAgents({ hostname, status }) {
    return api.get("/agents/search", {
        params: {
            hostname,
            status,
        },
    });
}