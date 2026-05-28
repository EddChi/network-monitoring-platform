import LoadingState from "../components/common/LoadingState";
import { useEffect, useState } from "react";
import AgentTable from "../components/agents/AgentTable";
import { getAgents, searchAgents } from "../api/agentsApi";
import ErrorState from "../components/common/ErrorState";
import StatCard from "../components/dashboard/StatCard";

function Agents() {
    const [agents, setAgents] = useState([]);
    const [hostname, setHostname] = useState("");
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const totalAgents = agents.length;
    const onlineAgents = agents.filter((agent) => agent.status === "ONLINE").length;
    const offlineAgents = agents.filter((agent) => agent.status === "OFFLINE").length;

    function loadAgents() {
        setLoading(true);

        getAgents()
            .then((response) => {
                setAgents(response.data);
                setError("");
            })
            .catch(() => {
                setError("Unable to load agents.");
            })
            .finally(() => {
                setLoading(false);
            });
    }

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLoading(true);

            const hasFilters = hostname.trim() || status;

            const request = hasFilters
                ? searchAgents({
                    hostname: hostname.trim() || undefined,
                    status: status || undefined,
                })
                : getAgents();

            request
                .then((response) => {
                    setAgents(response.data);
                    setError("");
                })
                .catch(() => {
                    setError("Unable to load agents.");
                })
                .finally(() => {
                    setLoading(false);
                });
        }, 300);

        return () => clearTimeout(timeoutId);
    }, [hostname, status]);

    function handleClearFilters() {
        setHostname("");
        setStatus("");
        loadAgents();
    }

    return (
        <div>
            <div>
                <p className="text-sm font-medium uppercase tracking-widest text-cyan-400">
                    Agents
                </p>

                <h1 className="mt-2 text-3xl font-bold text-slate-100">
                    Network Agents
                </h1>

                <p className="mt-2 text-slate-400">
                    View registered monitoring agents, their status and last seen times.
                </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-lg">
                <input
                    type="text"
                    value={hostname}
                    onChange={(event) => setHostname(event.target.value)}
                    placeholder="Search hostname..."
                    className="min-w-[260px] flex-1 rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-cyan-500"
                />

                <select
                    value={status}
                    onChange={(event) => setStatus(event.target.value)}
                    className="w-34 rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none focus:border-cyan-500"
                >
                    <option value="">All statuses</option>
                    <option value="ONLINE">Online</option>
                    <option value="OFFLINE">Offline</option>
                </select>

                <button
                    type="button"
                    onClick={handleClearFilters}
                    className="w-24 rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-300 hover:bg-slate-800"
                >
                    Clear
                </button>
            </div>

            {!loading && !error && (
                <div className="mt-8 grid gap-6 md:grid-cols-3">
                    <StatCard
                        title="Displayed Agents"
                        value={totalAgents}
                        subtitle="Matching current filters"
                    />

                    <StatCard
                        title="Online"
                        value={onlineAgents}
                        subtitle="Currently healthy"
                    />

                    <StatCard
                        title="Offline"
                        value={offlineAgents}
                        subtitle="Need attention"
                    />
                </div>
            )}

            {loading && <LoadingState message="Loading agents..." />}

            {error && <ErrorState message={error} />}

            {!loading && !error && (
                <div className="mt-8">
                    <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                        <div>
                            <h2 className="text-lg font-semibold text-slate-100">
                                Agent Results
                            </h2>
                            <p className="mt-1 text-sm text-slate-400">
                                Showing {agents.length} matching agent{agents.length === 1 ? "" : "s"}.
                            </p>
                        </div>
                    </div>

                    <AgentTable agents={agents} />
                </div>
            )}
        </div>
    );
}

export default Agents;