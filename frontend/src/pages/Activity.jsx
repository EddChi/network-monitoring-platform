import LoadingState from "../components/common/LoadingState";
import { useEffect, useState } from "react";
import ActivityTimeline from "../components/activity/ActivityTimeline";
import { getRecentActivity } from "../api/activityApi";
import ErrorState from "../components/common/ErrorState";

function Activity() {
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    function loadActivity() {
        setLoading(true);

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
    }

    function handleRefreshActivity() {
        loadActivity();
    }

    useEffect(() => {
        loadActivity();
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

                <div className="mt-6 flex flex-wrap gap-3">
                    <button
                        type="button"
                        onClick={handleRefreshActivity}
                        className="cursor-pointer rounded-xl border border-emerald-900 bg-emerald-950 px-4 py-2 text-sm font-semibold text-emerald-300 hover:bg-emerald-900/60"
                    >
                        Refresh Activity
                    </button>
                </div>
            </div>

            {loading && <LoadingState message="Loading activity..." />}

            {error && <ErrorState message={error} />}

            {!loading && !error && (
                <div className="mt-8">
                    <ActivityTimeline activities={activities} />
                </div>
            )}
        </div>
    );
}

export default Activity;