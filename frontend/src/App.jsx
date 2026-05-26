import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import Agents from "./pages/Agents";
import AgentDetails from "./pages/AgentDetails";
import Alerts from "./pages/Alerts";
import Activity from "./pages/Activity";

function App() {
    return (
        <Routes>
            <Route element={<AppLayout />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/agents" element={<Agents />} />
                <Route path="/agents/:id" element={<AgentDetails />} />
                <Route path="/alerts" element={<Alerts />} />
                <Route path="/activity" element={<Activity />} />
            </Route>
        </Routes>
    );
}

export default App;