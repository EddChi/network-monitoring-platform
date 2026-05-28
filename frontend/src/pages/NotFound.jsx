import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="flex min-h-[70vh] items-center justify-center">
            <div className="grid w-full max-w-5xl gap-8 rounded-3xl border border-slate-800 bg-slate-900 p-10 shadow-lg lg:grid-cols-[1fr_1.2fr]">
                <div className="flex flex-col justify-center">
                    <p className="text-8xl font-black tracking-tight text-slate-800 md:text-9xl">
                        404
                    </p>

                    <p className="mt-4 text-sm font-medium uppercase tracking-widest text-cyan-400">
                        Page not found
                    </p>

                    <h1 className="mt-3 text-3xl font-bold text-slate-100">
                        This route does not exist.
                    </h1>

                    <p className="mt-4 text-slate-400">
                        The page you are looking for is not part of the monitoring dashboard.
                        You can return to a valid section using the links below.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <Link
                            to="/"
                            className="rounded-xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-400"
                        >
                            Dashboard
                        </Link>

                        <Link
                            to="/agents"
                            className="rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-300 hover:bg-slate-800 hover:text-white"
                        >
                            Agents
                        </Link>

                        <Link
                            to="/alerts"
                            className="rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-300 hover:bg-slate-800 hover:text-white"
                        >
                            Alerts
                        </Link>
                    </div>
                </div>

                <div className="rounded-3xl border border-slate-800 bg-slate-950 p-8">
                    <div className="rounded-2xl border border-cyan-900/60 bg-cyan-950/20 p-6">
                        <p className="text-sm font-semibold text-cyan-300">
                            Network route unavailable
                        </p>

                        <div className="mt-6 space-y-4">
                            <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                                <p className="text-xs uppercase tracking-widest text-slate-500">
                                    Requested route
                                </p>
                                <p className="mt-2 text-sm text-slate-300">
                                    No matching frontend page was found.
                                </p>
                            </div>

                            <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                                <p className="text-xs uppercase tracking-widest text-slate-500">
                                    Suggested action
                                </p>
                                <p className="mt-2 text-sm text-slate-300">
                                    Return to the dashboard and continue monitoring agents,
                                    alerts and activity.
                                </p>
                            </div>

                            <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                                <p className="text-xs uppercase tracking-widest text-slate-500">
                                    System status
                                </p>
                                <p className="mt-2 text-sm text-emerald-300">
                                    Dashboard shell is still available.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotFound;