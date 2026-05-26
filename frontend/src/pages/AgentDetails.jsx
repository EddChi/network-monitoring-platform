import { useParams } from "react-router-dom";

function AgentDetails() {
    const { id } = useParams();

    return (
        <div>
            <div>
                <p className="text-sm font-medium uppercase tracking-widest text-cyan-400">
                    Agent Details
                </p>

                <h1 className="mt-2 text-3xl font-bold text-slate-100">
                    Agent #{id}
                </h1>

                <p className="mt-2 text-slate-400">
                    View detailed agent information, metrics, alerts and event history.
                </p>
            </div>
        </div>
    );
}

export default AgentDetails;