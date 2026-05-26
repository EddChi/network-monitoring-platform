function AgentEventTimeline({ events }) {
    if (events.length === 0) {
        return (
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center shadow-lg">
                <h2 className="text-lg font-semibold text-slate-100">
                    No events found
                </h2>
                <p className="mt-2 text-sm text-slate-400">
                    No event history has been recorded for this agent yet.
                </p>
            </div>
        );
    }

    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
            <div>
                <h2 className="text-lg font-semibold text-slate-100">
                    Agent Event Timeline
                </h2>

                <p className="mt-1 text-sm text-slate-400">
                    Recent status changes and monitoring events for this agent.
                </p>
            </div>

            <div className="mt-6 space-y-4">
                {events.map((event) => (
                    <div
                        key={event.id}
                        className="rounded-xl border border-slate-800 bg-slate-950 p-4"
                    >
                        <div className="flex items-center justify-between gap-4">
                            <p className="text-sm font-medium text-cyan-400">
                                {event.eventType}
                            </p>

                            <p className="text-xs text-slate-500">
                                {new Date(event.timestamp).toLocaleString()}
                            </p>
                        </div>

                        <p className="mt-2 text-sm text-slate-300">
                            {event.description}
                        </p>

                        <p className="mt-2 text-xs text-slate-500">
                            Host: {event.networkAgent?.hostname}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AgentEventTimeline;