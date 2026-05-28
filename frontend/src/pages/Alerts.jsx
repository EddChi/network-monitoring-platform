import LoadingState from "../components/common/LoadingState";
import { useEffect, useState } from "react";
import AlertTable from "../components/alerts/AlertTable";
import { getAlerts } from "../api/alertsApi";
import ErrorState from "../components/common/ErrorState";
import StatCard from "../components/dashboard/StatCard";

function Alerts() {
    const [alerts, setAlerts] = useState([]);
    const [severity, setSeverity] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const filteredAlerts = severity
        ? alerts.filter((alert) => alert.severity === severity)
        : alerts;

    const totalAlerts = filteredAlerts.length;
    const mediumAlerts = filteredAlerts.filter(
        (alert) => alert.severity === "MEDIUM",
    ).length;
    const highAlerts = filteredAlerts.filter(
        (alert) => alert.severity === "HIGH",
    ).length;
    const criticalAlerts = filteredAlerts.filter(
        (alert) => alert.severity === "CRITICAL",
    ).length;

    function loadAlerts() {
        setLoading(true);

        getAlerts()
            .then((response) => {
                setAlerts(response.data);
                setError("");
            })
            .catch(() => {
                setError("Unable to load alerts.");
            })
            .finally(() => {
                setLoading(false);
            });
    }

    function handleRefreshAlerts() {
        setSeverity("");
        loadAlerts();
    }

    useEffect(() => {
        loadAlerts();
    }, []);

    return (
        <div>
            <div>
                <p className="text-sm font-medium uppercase tracking-widest text-cyan-400">
                    Alerts
                </p>

                <h1 className="mt-2 text-3xl font-bold text-slate-100">
                    Monitoring Alerts
                </h1>

                <p className="mt-2 text-slate-400">
                    View generated alerts, severity levels and affected network agents.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                    <button
                        type="button"
                        onClick={handleRefreshAlerts}
                        className="cursor-pointer rounded-xl border border-emerald-900 bg-emerald-950 px-4 py-2 text-sm font-semibold text-emerald-300 hover:bg-emerald-900/60"
                    >
                        Refresh Alerts
                    </button>
                </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
                <div>
                    <h2 className="text-lg font-semibold text-slate-100">
                        Alert Filters
                    </h2>
                    <p className="mt-1 text-sm text-slate-400">
                        Filter alerts by severity level.
                    </p>
                </div>

                <div className="flex flex-wrap gap-3">
                    <select
                        value={severity}
                        onChange={(event) => setSeverity(event.target.value)}
                        className="w-44 rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none focus:border-cyan-500"
                    >
                        <option value="">All severities</option>
                        <option value="MEDIUM">Medium</option>
                        <option value="HIGH">High</option>
                        <option value="CRITICAL">Critical</option>
                    </select>

                    <button
                        type="button"
                        onClick={() => setSeverity("")}
                        className="w-24 rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-300 hover:bg-slate-800"
                    >
                        Clear
                    </button>
                </div>
            </div>

            {!loading && !error && (
                <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                    <StatCard
                        title="Displayed Alerts"
                        value={totalAlerts}
                        subtitle="Matching current filter"
                    />

                    <StatCard
                        title="Medium"
                        value={mediumAlerts}
                        subtitle="Moderate priority"
                    />

                    <StatCard
                        title="High"
                        value={highAlerts}
                        subtitle="Needs review"
                    />

                    <StatCard
                        title="Critical"
                        value={criticalAlerts}
                        subtitle="Highest priority"
                    />
                </div>
            )}

            {loading && <LoadingState message="Loading alerts..." />}

            {error && <ErrorState message={error} />}

            {!loading && !error && (
                <div className="mt-8">
                    <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                        <div>
                            <h2 className="text-lg font-semibold text-slate-100">
                                Alert Results
                            </h2>
                            <p className="mt-1 text-sm text-slate-400">
                                Showing {filteredAlerts.length} matching alert
                                {filteredAlerts.length === 1 ? "" : "s"}.
                            </p>
                        </div>
                    </div>

                    <AlertTable alerts={filteredAlerts} />
                </div>
            )}
        </div>
    );
}

export default Alerts;