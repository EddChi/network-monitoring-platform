import SeverityBadge from "./SeverityBadge";
import StatusBadge from "../agents/StatusBadge";

function AlertTable({ alerts }) {
    return (
        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg">
            <table className="w-full text-left text-sm">
                <thead className="border-b border-slate-800 bg-slate-950 text-xs uppercase tracking-wider text-slate-400">
                <tr>
                    <th className="px-6 py-4">Alert Type</th>
                    <th className="px-6 py-4">Severity</th>
                    <th className="px-6 py-4">Message</th>
                    <th className="px-6 py-4">Hostname</th>
                    <th className="px-6 py-4">Agent Status</th>
                    <th className="px-6 py-4">Created</th>
                </tr>
                </thead>

                <tbody className="divide-y divide-slate-800">
                {alerts.map((alert) => (
                    <tr key={alert.id} className="hover:bg-slate-800/50">
                        <td className="px-6 py-4 font-medium text-slate-100">
                            {alert.alertType}
                        </td>

                        <td className="px-6 py-4">
                            <SeverityBadge severity={alert.severity} />
                        </td>

                        <td className="px-6 py-4 text-slate-300">{alert.message}</td>

                        <td className="px-6 py-4 text-slate-300">{alert.hostname}</td>

                        <td className="px-6 py-4">
                            <StatusBadge status={alert.agentStatus} />
                        </td>

                        <td className="px-6 py-4 text-slate-400">
                            {new Date(alert.createdAt).toLocaleString()}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default AlertTable;