import api from "./api";

export function checkApiHealth() {
    return api.get("/dashboard/summary");
}