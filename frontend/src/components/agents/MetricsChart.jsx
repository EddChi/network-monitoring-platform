import {
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

function MetricsChart({ metrics }) {
    if (metrics.length === 0) {
        return null;
    }

    const chartData = [...metrics]
        .reverse()
        .map((metric) => ({
            time: new Date(metric.recordedAt).toLocaleTimeString(),
            cpu: metric.cpuUsage,
            memory: metric.memoryUsage,
            disk: metric.diskUsage,
            latency: metric.networkLatencyMs,
        }));

    return (
        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
            <div>
                <h2 className="text-lg font-semibold text-slate-100">
                    Metrics Trend
                </h2>

                <p className="mt-1 text-sm text-slate-400">
                    Visual trend of CPU, memory, disk usage and network latency over time.
                </p>
            </div>

            <div className="mt-6 h-80 rounded-xl border border-slate-800 bg-slate-950 p-4">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />

                        <XAxis
                            dataKey="time"
                            stroke="#94a3b8"
                            tick={{ fill: "#94a3b8", fontSize: 12 }}
                        />

                        <YAxis
                            stroke="#94a3b8"
                            tick={{ fill: "#94a3b8", fontSize: 12 }}
                        />

                        <Tooltip
                            contentStyle={{
                                backgroundColor: "#020617",
                                border: "1px solid #1e293b",
                                borderRadius: "12px",
                                color: "#e2e8f0",
                            }}
                            labelStyle={{ color: "#67e8f9" }}
                        />

                        <Line
                            type="monotone"
                            dataKey="cpu"
                            name="CPU %"
                            stroke="#22d3ee"
                            strokeWidth={2}
                            dot={false}
                        />

                        <Line
                            type="monotone"
                            dataKey="memory"
                            name="Memory %"
                            stroke="#a78bfa"
                            strokeWidth={2}
                            dot={false}
                        />

                        <Line
                            type="monotone"
                            dataKey="disk"
                            name="Disk %"
                            stroke="#34d399"
                            strokeWidth={2}
                            dot={false}
                        />

                        <Line
                            type="monotone"
                            dataKey="latency"
                            name="Latency ms"
                            stroke="#f97316"
                            strokeWidth={2}
                            dot={false}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default MetricsChart;