import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="flex min-h-[60vh] items-center justify-center">
            <div className="max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center shadow-lg">
                <p className="text-sm font-medium uppercase tracking-widest text-cyan-400">
                    404
                </p>

                <h1 className="mt-3 text-3xl font-bold text-slate-100">
                    Page not found
                </h1>

                <p className="mt-3 text-slate-400">
                    The page you are looking for does not exist in the monitoring dashboard.
                </p>

                <Link
                    to="/"
                    className="mt-6 inline-flex rounded-xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-400"
                >
                    Back to Dashboard
                </Link>
            </div>
        </div>
    );
}

export default NotFound;