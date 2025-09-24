import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ManageEvent from "./components/ManageEvent";
import ManageWebsites from "./components/ManageWebsite";

function DashboardLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <Routes>
          <Route path="/" element={<h3>*Dashboard Home Contents*</h3>} />
          <Route path="events" element={<ManageEvent />} />
          <Route path="website" element={<ManageWebsites />} />
        </Routes>
      </div>
    </div>
  );
}

export default DashboardLayout;
