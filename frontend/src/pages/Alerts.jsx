import LoadingState from "../components/common/LoadingState";
import { useEffect, useState } from "react";
import AlertTable from "../components/alerts/AlertTable";
import { getAlerts } from "../api/alertsApi";
import ErrorState from "../components/common/ErrorState";

function Alerts() {
    const [alerts, setAlerts] = useState([]);
    const [severity, setSeverity] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const filteredAlerts = severity
        ? alerts.filter((alert) => alert.severity === severity)
        : alerts;

    useEffect(() => {
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
                        className="w-34 rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none focus:border-cyan-500"
                    >
                        <option value="">All Severities</option>
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

            {loading && <LoadingState message="Loading alerts..." />}

            {error && <ErrorState message={error} />}

            {!loading && !error && (
                <div className="mt-8">
                    <AlertTable alerts={filteredAlerts} />
                </div>
            )}
        </div>
    );
}

export default Alerts;