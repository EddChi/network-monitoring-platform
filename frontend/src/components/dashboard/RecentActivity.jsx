function RecentActivity({ activities }) {
    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
            <div>
                <h2 className="text-lg font-semibold text-slate-100">
                    Recent Activity
                </h2>
                <p className="mt-1 text-sm text-slate-400">
                    Latest agent and monitoring events from the backend.
                </p>
            </div>

            <div className="mt-6 space-y-4">
                {activities.map((activity, index) => (
                    <div
                        key={`${activity.hostname}-${activity.timestamp}-${index}`}
                        className="rounded-xl border border-slate-800 bg-slate-950 p-4"
                    >
                        <div className="flex items-center justify-between gap-4">
                            <p className="text-sm font-medium text-cyan-400">
                                {activity.activityType}
                            </p>

                            <p className="text-xs text-slate-500">
                                {new Date(activity.timestamp).toLocaleString()}
                            </p>
                        </div>

                        <p className="mt-2 text-sm text-slate-300">{activity.message}</p>

                        <p className="mt-2 text-xs text-slate-500">
                            Host: {activity.hostname}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RecentActivity;