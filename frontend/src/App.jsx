import { Route, Routes } from "react-router-dom";

function Dashboard() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-slate-100">Dashboard</h1>
            <p className="mt-2 text-slate-400">
                Monitoring summary and system health overview will appear here.
            </p>
        </div>
    );
}

function Agents() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-slate-100">Agents</h1>
            <p className="mt-2 text-slate-400">
                Network agents and status information will appear here.
            </p>
        </div>
    );
}

function Alerts() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-slate-100">Alerts</h1>
            <p className="mt-2 text-slate-400">
                Generated monitoring alerts will appear here.
            </p>
        </div>
    );
}

function App() {
    return (
        <main className="min-h-screen bg-slate-950 p-8 text-slate-100">
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/agents" element={<Agents />} />
                <Route path="/alerts" element={<Alerts />} />
            </Routes>
        </main>
    );
}

export default App;