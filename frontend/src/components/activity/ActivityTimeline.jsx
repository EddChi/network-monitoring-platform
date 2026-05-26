function ActivityTimeline({ activities }) {
    if (activities.length === 0) {
        return (
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center shadow-lg">
                <h2 className="text-lg font-semibold text-slate-100">
                    No activity found
                </h2>
                <p className="mt-2 text-sm text-slate-400">
                    No recent monitoring activity has been recorded yet.
                </p>
            </div>
        );
    }

    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <h2 className="text-lg font-semibold text-slate-100">
                        Monitoring Timeline
                    </h2>

                    <p className="mt-1 text-sm text-slate-400">
                        Latest activity events across monitored network agents.
                    </p>
                </div>

                <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-medium text-slate-400">
          {activities.length} events
        </span>
            </div>

            <div className="custom-scrollbar mt-6 max-h-[620px] space-y-4 overflow-y-auto pr-2">
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

export default ActivityTimeline;