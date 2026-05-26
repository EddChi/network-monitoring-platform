function MetricsSummary({ metrics }) {
    return (
        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
            <div>
                <h2 className="text-lg font-semibold text-slate-100">
                    Metrics Summary
                </h2>

                <p className="mt-1 text-sm text-slate-400">
                    Average and peak system metrics collected for this agent.
                </p>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                    <p className="text-sm text-slate-500">Average CPU</p>
                    <p className="mt-2 text-2xl font-bold text-slate-100">
                        {metrics.averageCpuUsage}%
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                        Max: {metrics.maxCpuUsage}%
                    </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                    <p className="text-sm text-slate-500">Average Memory</p>
                    <p className="mt-2 text-2xl font-bold text-slate-100">
                        {metrics.averageMemoryUsage}%
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                        Max: {metrics.maxMemoryUsage}%
                    </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                    <p className="text-sm text-slate-500">Average Disk</p>
                    <p className="mt-2 text-2xl font-bold text-slate-100">
                        {metrics.averageDiskUsage}%
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                        Max: {metrics.maxDiskUsage}%
                    </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                    <p className="text-sm text-slate-500">Average Latency</p>
                    <p className="mt-2 text-2xl font-bold text-slate-100">
                        {metrics.averageNetworkLatencyMs} ms
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                        Max: {metrics.maxNetworkLatencyMs} ms
                    </p>
                </div>
            </div>
        </div>
    );
}

export default MetricsSummary;