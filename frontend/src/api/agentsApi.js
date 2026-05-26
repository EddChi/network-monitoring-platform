import api from "./api";

export function getAgents() {
    return api.get("/agents");
}