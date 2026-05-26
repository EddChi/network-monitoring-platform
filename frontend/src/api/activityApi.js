import api from "./api";

export function getRecentActivity() {
    return api.get("/activity/recent");
}