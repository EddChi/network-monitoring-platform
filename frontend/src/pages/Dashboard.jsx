import { useEffect, useState } from "react";
import StatCard from "../components/dashboard/StatCard";
import RecentActivity from "../components/dashboard/RecentActivity";
import LatestAlerts from "../components/dashboard/LatestAlerts";
import { getDashboardSummary } from "../api/dashboardApi";
import { getRecentActivity } from "../api/activityApi";
import { getAlerts } from "../api/alertsApi";

function Dashboard() {
    const [summary, setSummary] = useState(null);
    const [activities, setActivities] = useState([]);
    const [alerts, setAlerts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        Promise.all([getDashboardSummary(), getRecentActivity(), getAlerts()])
            .then(([summaryResponse, activityResponse, alertsResponse]) => {
                setSummary(summaryResponse.data);
                setActivities(activityResponse.data);
                setAlerts(alertsResponse.data);
                setError("");
            })
            .catch(() => {
                setError("Unable to load dashboard data.");
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <div>
                <p className="text-sm font-medium uppercase tracking-widest text-cyan-400">
                    Overview
                </p>

                <h1 className="mt-2 text-3xl font-bold text-slate-100">
                    Network Monitoring Dashboard
                </h1>

                <p className="mt-2 text-slate-400">
                    View agent health, alert activity and system monitoring summaries.
                </p>
            </div>

            {loading && (
                <p className="mt-8 text-slate-400">Loading dashboard data...</p>
            )}

            {error && (
                <div className="mt-8 rounded-xl border border-red-900 bg-red-950/50 p-4 text-red-300">
                    {error}
                </div>
            )}

            {summary && (
                <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
                    <StatCard
                        title="Total Agents"
                        value={summary.totalAgents}
                        subtitle="Registered agents"
                    />

                    <StatCard
                        title="Online Agents"
                        value={summary.onlineAgents}
                        subtitle="Currently healthy"
                    />

                    <StatCard
                        title="Offline Agents"
                        value={summary.offlineAgents}
                        subtitle="Need attention"
                    />

                    <StatCard
                        title="Total Alerts"
                        value={summary.totalAlerts}
                        subtitle="Generated alerts"
                    />

                    <StatCard
                        title="Critical Alerts"
                        value={summary.criticalAlerts}
                        subtitle="Highest priority"
                    />
                </div>
            )}

            {!loading && !error && (
                <div className="mt-8 grid gap-6 xl:grid-cols-2">
                    <LatestAlerts alerts={alerts} />
                    <RecentActivity activities={activities} />
                </div>
            )}
        </div>
    );
}

export default Dashboard;