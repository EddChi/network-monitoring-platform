import { Link } from "react-router-dom";
import StatusBadge from "./StatusBadge";

function AgentTable({ agents }) {
    if (agents.length === 0) {
        return (
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center shadow-lg">
                <h2 className="text-lg font-semibold text-slate-100">
                    No agents found
                </h2>
                <p className="mt-2 text-sm text-slate-400">
                    Try changing the hostname search or status filter.
                </p>
            </div>
        );
    }

    return (
        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg">
            <table className="w-full text-left text-sm">
                <thead className="border-b border-slate-800 bg-slate-950 text-xs uppercase tracking-wider text-slate-400">
                <tr>
                    <th className="px-6 py-4">Hostname</th>
                    <th className="px-6 py-4">IP Address</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Last Seen</th>
                    <th className="px-6 py-4">Created</th>
                </tr>
                </thead>

                <tbody className="divide-y divide-slate-800">
                {agents.map((agent) => (
                    <tr key={agent.id} className="hover:bg-slate-800/50">
                        <td className="px-6 py-4 font-medium">
                            <Link
                                to={`/agents/${agent.id}`}
                                className="text-cyan-300 hover:text-cyan-200 hover:underline"
                            >
                                {agent.hostname}
                            </Link>
                        </td>

                        <td className="px-6 py-4 text-slate-300">{agent.ipAddress}</td>

                        <td className="px-6 py-4">
                            <StatusBadge status={agent.status} />
                        </td>

                        <td className="px-6 py-4 text-slate-400">
                            {new Date(agent.lastSeen).toLocaleString()}
                        </td>

                        <td className="px-6 py-4 text-slate-400">
                            {new Date(agent.createdAt).toLocaleString()}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default AgentTable;