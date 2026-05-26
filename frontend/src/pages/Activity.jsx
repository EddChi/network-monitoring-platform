import { useEffect, useState } from "react";
import ActivityTimeline from "../components/activity/ActivityTimeline";
import { getRecentActivity } from "../api/activityApi";

function Activity() {
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        getRecentActivity()
            .then((response) => {
                setActivities(response.data);
                setError("");
            })
            .catch(() => {
                setError("Unable to load activity feed.");
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <div>
                <p className="text-sm font-medium uppercase tracking-widest text-cyan-400">
                    Activity
                </p>

                <h1 className="mt-2 text-3xl font-bold text-slate-100">
                    Activity Timeline
                </h1>

                <p className="mt-2 text-slate-400">
                    View recent monitoring events and agent activity across the platform.
                </p>
            </div>

            {loading && <p className="mt-8 text-slate-400">Loading activity...</p>}

            {error && (
                <div className="mt-8 rounded-xl border border-red-900 bg-red-950/50 p-4 text-red-300">
                    {error}
                </div>
            )}

            {!loading && !error && (
                <div className="mt-8">
                    <ActivityTimeline activities={activities} />
                </div>
            )}
        </div>
    );
}

export default Activity;