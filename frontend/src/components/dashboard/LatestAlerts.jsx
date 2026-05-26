import SeverityBadge from "../alerts/SeverityBadge";

function LatestAlerts({ alerts }) {
    if (alerts.length === 0) {
        return (
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
                <h2 className="text-lg font-semibold text-slate-100">Latest Alerts</h2>
                <p className="mt-2 text-sm text-slate-400">
                    No alerts have been generated yet.
                </p>
            </div>
        );
    }

    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <h2 className="text-lg font-semibold text-slate-100">
                        Latest Alerts
                    </h2>
                    <p className="mt-1 text-sm text-slate-400">
                        Recent threshold breaches across monitored agents.
                    </p>
                </div>

                <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-medium text-slate-400">
          {alerts.length} alerts
        </span>
            </div>

            <div className="custom-scrollbar mt-6 max-h-[420px] space-y-4 overflow-y-auto pr-2">
                {alerts.map((alert) => (
                    <div
                        key={alert.id}
                        className="rounded-xl border border-slate-800 bg-slate-950 p-4"
                    >
                        <div className="flex items-center justify-between gap-4">
                            <p className="text-sm font-semibold text-slate-100">
                                {alert.alertType}
                            </p>

                            <SeverityBadge severity={alert.severity} />
                        </div>

                        <p className="mt-2 text-sm text-slate-300">{alert.message}</p>

                        <p className="mt-2 text-xs text-slate-500">
                            {alert.hostname} • {new Date(alert.createdAt).toLocaleString()}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LatestAlerts;