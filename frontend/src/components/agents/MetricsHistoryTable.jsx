function getMetricTextColour(value, warningThreshold, criticalThreshold) {
    if (value >= criticalThreshold) {
        return "text-red-300";
    }

    if (value >= warningThreshold) {
        return "text-amber-300";
    }

    return "text-emerald-300";
}

function MetricsHistoryTable({ metrics }) {
    if (metrics.length === 0) {
        return (
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center shadow-lg">
                <h2 className="text-lg font-semibold text-slate-100">
                    No metrics found
                </h2>
                <p className="mt-2 text-sm text-slate-400">
                    No metric records have been collected for this agent yet.
                </p>
            </div>
        );
    }

    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <h2 className="text-lg font-semibold text-slate-100">
                        Metrics History
                    </h2>

                    <p className="mt-1 text-sm text-slate-400">
                        Recent CPU, memory, disk and latency records for this agent.
                    </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-emerald-900 bg-emerald-950 px-3 py-1 text-xs font-medium text-emerald-300">
                        Normal
                    </span>

                    <span className="rounded-full border border-amber-900 bg-amber-950 px-3 py-1 text-xs font-medium text-amber-300">
                        Warning
                    </span>

                    <span className="rounded-full border border-red-900 bg-red-950 px-3 py-1 text-xs font-medium text-red-300">
                        Critical
                    </span>

                    <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-medium text-slate-400">
                        {metrics.length} records
                    </span>
                </div>
            </div>

            <div className="custom-scrollbar mt-6 max-h-[420px] overflow-y-auto pr-2">
                <table className="w-full text-left text-sm">
                    <thead className="sticky top-0 border-b border-slate-800 bg-slate-950 text-xs uppercase tracking-wider text-slate-400">
                    <tr>
                        <th className="px-4 py-3">CPU</th>
                        <th className="px-4 py-3">Memory</th>
                        <th className="px-4 py-3">Disk</th>
                        <th className="px-4 py-3">Latency</th>
                        <th className="px-4 py-3">Recorded</th>
                    </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-800">
                    {metrics.map((metric) => (
                        <tr key={metric.id} className="hover:bg-slate-800/50">
                            <td
                                className={`px-4 py-3 font-medium ${getMetricTextColour(
                                    metric.cpuUsage,
                                    70,
                                    90,
                                )}`}
                            >
                                {metric.cpuUsage}%
                            </td>

                            <td
                                className={`px-4 py-3 font-medium ${getMetricTextColour(
                                    metric.memoryUsage,
                                    75,
                                    90,
                                )}`}
                            >
                                {metric.memoryUsage}%
                            </td>

                            <td
                                className={`px-4 py-3 font-medium ${getMetricTextColour(
                                    metric.diskUsage,
                                    70,
                                    90,
                                )}`}
                            >
                                {metric.diskUsage}%
                            </td>

                            <td
                                className={`px-4 py-3 font-medium ${getMetricTextColour(
                                    metric.networkLatencyMs,
                                    80,
                                    120,
                                )}`}
                            >
                                {metric.networkLatencyMs} ms
                            </td>

                            <td className="px-4 py-3 text-slate-400">
                                {new Date(metric.recordedAt).toLocaleString()}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MetricsHistoryTable;