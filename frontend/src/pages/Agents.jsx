import { useEffect, useState } from "react";
import AgentTable from "../components/agents/AgentTable";
import { getAgents, searchAgents } from "../api/agentsApi";

function Agents() {
    const [agents, setAgents] = useState([]);
    const [hostname, setHostname] = useState("");
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

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

    function handleSearch(event) {
        event.preventDefault();
        setLoading(true);

        searchAgents({
            hostname: hostname || undefined,
            status: status || undefined,
        })
            .then((response) => {
                setAgents(response.data);
                setError("");
            })
            .catch(() => {
                setError("Unable to search agents.");
            })
            .finally(() => {
                setLoading(false);
            });
    }

    function handleClearFilters() {
        setHostname("");
        setStatus("");
        loadAgents();
    }

    useEffect(() => {
        loadAgents();
    }, []);

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

            <form
                onSubmit={handleSearch}
                className="mt-8 grid gap-4 rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg md:grid-cols-[1fr_220px_auto_auto]"
            >
                <input
                    type="text"
                    value={hostname}
                    onChange={(event) => setHostname(event.target.value)}
                    placeholder="Search hostname..."
                    className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-cyan-500"
                />

                <select
                    value={status}
                    onChange={(event) => setStatus(event.target.value)}
                    className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none focus:border-cyan-500"
                >
                    <option value="">All statuses</option>
                    <option value="ONLINE">ONLINE</option>
                    <option value="OFFLINE">OFFLINE</option>
                </select>

                <button
                    type="submit"
                    className="rounded-xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-400"
                >
                    Search
                </button>

                <button
                    type="button"
                    onClick={handleClearFilters}
                    className="rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-300 hover:bg-slate-800"
                >
                    Clear
                </button>
            </form>

            {loading && <p className="mt-8 text-slate-400">Loading agents...</p>}

            {error && (
                <div className="mt-8 rounded-xl border border-red-900 bg-red-950/50 p-4 text-red-300">
                    {error}
                </div>
            )}

            {!loading && !error && (
                <div className="mt-8">
                    <AgentTable agents={agents} />
                </div>
            )}
        </div>
    );
}

export default Agents;