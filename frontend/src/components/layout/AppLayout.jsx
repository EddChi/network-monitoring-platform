import { NavLink, Outlet } from "react-router-dom";

function AppLayout() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100">
            <aside className="fixed left-0 top-0 h-screen w-64 border-r border-slate-800 bg-slate-900 px-6 py-6">
                <h1 className="text-xl font-bold">NetMonitor</h1>
                <p className="mt-1 text-sm text-slate-400">Monitoring Dashboard</p>

                <nav className="mt-8 space-y-2">
                    <NavLink
                        to="/"
                        className="block rounded-xl px-4 py-3 text-sm text-slate-300 hover:bg-slate-800 hover:text-white"
                    >
                        Dashboard
                    </NavLink>

                    <NavLink
                        to="/agents"
                        className="block rounded-xl px-4 py-3 text-sm text-slate-300 hover:bg-slate-800 hover:text-white"
                    >
                        Agents
                    </NavLink>

                    <NavLink
                        to="/alerts"
                        className="block rounded-xl px-4 py-3 text-sm text-slate-300 hover:bg-slate-800 hover:text-white"
                    >
                        Alerts
                    </NavLink>
                </nav>
            </aside>

            <main className="ml-64 min-h-screen p-8">
                <Outlet />
            </main>
        </div>
    );
}

export default AppLayout;