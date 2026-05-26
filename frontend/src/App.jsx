import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Agents from "./pages/Agents";
import Alerts from "./pages/Alerts";

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