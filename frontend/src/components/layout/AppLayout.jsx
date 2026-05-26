import { NavLink, Outlet } from "react-router-dom";

function AppLayout() {
    const navLinkClass = ({ isActive }) =>
        `block rounded-xl px-4 py-3 text-sm transition ${
            isActive
                ? "bg-cyan-500/10 text-cyan-300"
                : "text-slate-300 hover:bg-slate-800 hover:text-white"
        }`;

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
            </aside>

            <main className="ml-64 min-h-screen p-8">
                <header className="mb-8 flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900 px-6 py-4 shadow-lg">
                    <div>
                        <p className="text-sm text-slate-400">System status</p>
                        <h2 className="text-lg font-semibold text-slate-100">
                            Network Monitoring Platform
                        </h2>
                    </div>

                    <div className="rounded-full border border-emerald-900 bg-emerald-950 px-4 py-2 text-sm font-medium text-emerald-300">
                        API Connected
                    </div>
                </header>

                <Outlet />
            </main>
        </div>
    );
}

export default AppLayout;