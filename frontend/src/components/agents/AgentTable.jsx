import StatusBadge from "./StatusBadge";

function AgentTable({ agents }) {
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
                        <td className="px-6 py-4 font-medium text-slate-100">
                            {agent.hostname}
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