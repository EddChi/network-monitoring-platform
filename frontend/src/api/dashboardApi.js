import api from "./api";

export function getDashboardSummary() {
    return api.get("/dashboard/summary");
}