import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StatusBadge from "../components/agents/StatusBadge";
import MetricsSummary from "../components/agents/MetricsSummary";
import AgentEventTimeline from "../components/agents/AgentEventTimeline";
import AlertTable from "../components/alerts/AlertTable";
import { getAgentById } from "../api/agentsApi";
import { getAgentMetricsSummary } from "../api/metricsApi";
import { getAlertsByAgentId } from "../api/alertsApi";
import { getEventsByAgentId } from "../api/eventsApi";

function AgentDetails() {
    const { id } = useParams();

    const [agent, setAgent] = useState(null);
    const [metrics, setMetrics] = useState(null);
    const [alerts, setAlerts] = useState([]);
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        Promise.all([
            getAgentById(id),
            getAgentMetricsSummary(id),
            getAlertsByAgentId(id),
            getEventsByAgentId(id),
        ])
            .then(([agentResponse, metricsResponse, alertsResponse, eventsResponse]) => {
                setAgent(agentResponse.data);
                setMetrics(metricsResponse.data);
                setAlerts(alertsResponse.data);
                setEvents(eventsResponse.data);
                setError("");
            })
            .catch(() => {
                setError("Unable to load agent details.");
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    return (
        <div>
            <div>
                <p className="text-sm font-medium uppercase tracking-widest text-cyan-400">
                    Agent Details
                </p>

                <h1 className="mt-2 text-3xl font-bold text-slate-100">
                    Agent #{id}
                </h1>

                <p className="mt-2 text-slate-400">
                    View detailed agent information, metrics, alerts and event history.
                </p>
            </div>

            {loading && (
                <p className="mt-8 text-slate-400">Loading agent details...</p>
            )}

            {error && (
                <div className="mt-8 rounded-xl border border-red-900 bg-red-950/50 p-4 text-red-300">
                    {error}
                </div>
            )}

            {agent && (
                <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-100">
                                {agent.hostname}
                            </h2>

                            <p className="mt-2 text-slate-400">
                                IP Address: {agent.ipAddress}
                            </p>
                        </div>

                        <StatusBadge status={agent.status} />
                    </div>

                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                        <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                            <p className="text-sm text-slate-500">Last Seen</p>
                            <p className="mt-2 text-slate-200">
                                {new Date(agent.lastSeen).toLocaleString()}
                            </p>
                        </div>

                        <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                            <p className="text-sm text-slate-500">Created At</p>
                            <p className="mt-2 text-slate-200">
                                {new Date(agent.createdAt).toLocaleString()}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {metrics && <MetricsSummary metrics={metrics} />}

            {!loading && !error && (
                <div className="mt-8">
                    <div className="mb-4">
                        <h2 className="text-lg font-semibold text-slate-100">
                            Agent Alerts
                        </h2>
                        <p className="mt-1 text-sm text-slate-400">
                            Alerts generated specifically for this monitored agent.
                        </p>
                    </div>

                    <AlertTable alerts={alerts} />
                </div>
            )}

            {!loading && !error && (
                <div className="mt-8">
                    <AgentEventTimeline events={events} />
                </div>
            )}
        </div>
    );
}

export default AgentDetails;