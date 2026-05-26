import { useEffect, useState } from "react";
import AgentTable from "../components/agents/AgentTable";
import { getAgents } from "../api/agentsApi";

function Agents() {
    const [agents, setAgents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
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