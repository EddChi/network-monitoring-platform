import LoadingState from "../components/common/LoadingState";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import StatCard from "../components/dashboard/StatCard";
import RecentActivity from "../components/dashboard/RecentActivity";
import LatestAlerts from "../components/dashboard/LatestAlerts";
import { getDashboardSummary } from "../api/dashboardApi";
import { getRecentActivity } from "../api/activityApi";
import { getAlerts } from "../api/alertsApi";
import ErrorState from "../components/common/ErrorState";

function Dashboard() {
    const [summary, setSummary] = useState(null);
    const [activities, setActivities] = useState([]);
    const [alerts, setAlerts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [lastUpdated, setLastUpdated] = useState(null);
    const [error, setError] = useState("");

    function loadDashboardData(isRefresh = false) {
        if (isRefresh) {
            setRefreshing(true);
        } else {
            setLoading(true);
        }

        Promise.all([getDashboardSummary(), getRecentActivity(), getAlerts()])
            .then(([summaryResponse, activityResponse, alertsResponse]) => {
                setSummary(summaryResponse.data);
                setActivities(activityResponse.data);
                setAlerts(alertsResponse.data);
                setLastUpdated(new Date());
                setError("");
            })
            .catch(() => {
                setError("Unable to load dashboard data.");
            })
            .finally(() => {
                setLoading(false);
                setRefreshing(false);
            });
    }

    useEffect(() => {
        loadDashboardData();
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

                <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                        to="/agents"
                        className="rounded-xl bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-400"
                    >
                        View Agents
                    </Link>

                    <Link
                        to="/alerts"
                        className="rounded-xl border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-300 hover:bg-slate-800 hover:text-white"
                    >
                        View Alerts
                    </Link>

                    <Link
                        to="/activity"
                        className="rounded-xl border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-300 hover:bg-slate-800 hover:text-white"
                    >
                        View Activity
                    </Link>

                    <button
                        type="button"
                        onClick={() => loadDashboardData(true)}
                        disabled={refreshing}
                        className="cursor-pointer rounded-xl border border-emerald-900 bg-emerald-950 px-4 py-2 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-900/60 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {refreshing ? "Refreshing..." : "Refresh Data"}
                    </button>
                </div>

                {lastUpdated && (
                    <p className="mt-3 text-sm text-slate-500">
                        Last updated: {lastUpdated.toLocaleTimeString()}
                    </p>
                )}

            </div>

            {loading && <LoadingState message="Loading dashboard data..." />}

            {error && <ErrorState message={error} />}

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