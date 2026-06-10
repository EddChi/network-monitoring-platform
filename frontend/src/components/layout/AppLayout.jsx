import { NavLink, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { checkApiHealth } from "../../api/healthApi";

function AppLayout() {
    const navLinkClass = ({ isActive }) =>
        `block rounded-xl px-4 py-3 text-sm transition ${
            isActive
                ? "bg-cyan-500/10 text-cyan-300"
                : "text-slate-300 hover:bg-slate-800 hover:text-white"
        }`;

    const [apiOnline, setApiOnline] = useState(null);

    useEffect(() => {
        async function checkHealth() {
            try {
                await checkApiHealth();
                setApiOnline(true);
            } catch (error) {
                setApiOnline(false);
            }
        }

        checkHealth();
    }, []);

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100">
            <aside className="fixed left-0 top-0 h-screen w-64 border-r border-slate-800 bg-slate-900 px-6 py-6">
                <h1 className="text-xl font-bold">NetMonitor</h1>
                <p className="mt-1 text-sm text-slate-400">Monitoring Dashboard</p>

                <nav className="mt-8 space-y-2">
                    <NavLink to="/" className={navLinkClass}>
                        Dashboard
                    </NavLink>

                    <NavLink to="/agents" className={navLinkClass}>
                        Agents
                    </NavLink>

                    <NavLink to="/alerts" className={navLinkClass}>
                        Alerts
                    </NavLink>

                    <NavLink to="/activity" className={navLinkClass}>
                        Activity
                    </NavLink>
                </nav>

                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-slate-800 bg-slate-950 p-4">
                    <p className="text-xs font-medium uppercase tracking-widest text-slate-500">
                        Tech Stack
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                        <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
                            React
                        </span>

                        <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
                            Spring Boot
                        </span>

                        <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
                            PostgreSQL
                        </span>
                    </div>
                </div>
            </aside>

            <main className="ml-64 min-h-screen p-8">
                <div className="mx-auto max-w-7xl">
                    <header className="mb-8 flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900 px-6 py-4 shadow-lg">
                        <div>
                            <p className="text-sm text-slate-400">System status</p>
                            <h2 className="text-lg font-semibold text-slate-100">
                                Network Monitoring Platform
                            </h2>
                        </div>

                        <div
                            className={`rounded-full border px-4 py-1.5 text-sm font-semibold ${
                                apiOnline === true
                                    ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
                                    : apiOnline === false
                                        ? "border-red-500/30 bg-red-500/10 text-red-300"
                                        : "border-slate-600 bg-slate-800 text-slate-300"
                            }`}
                        >
                            {apiOnline === true
                                ? "API Online"
                                : apiOnline === false
                                    ? "API Offline"
                                    : "Checking API"}
                        </div>
                    </header>
                    <section className="pb-10">
                        <Outlet />
                    </section>
                </div>
            </main>
        </div>
    );
}

export default AppLayout;