import { useEffect, useState } from "react";
import AlertTable from "../components/alerts/AlertTable";
import { getAlerts } from "../api/alertsApi";

function Alerts() {
    const [alerts, setAlerts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

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

            {loading && <p className="mt-8 text-slate-400">Loading alerts...</p>}

            {error && (
                <div className="mt-8 rounded-xl border border-red-900 bg-red-950/50 p-4 text-red-300">
                    {error}
                </div>
            )}

            {!loading && !error && (
                <div className="mt-8">
                    <AlertTable alerts={alerts} />
                </div>
            )}
        </div>
    );
}

export default Alerts;