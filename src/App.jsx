import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/auth/Login";
import DashboardLayout from "./pages/user/DashboardLayout";
import PublicSite from "./pages/publicUser/PublicSite";
import { extractSubdomain } from './utils/utils'

import './App.css'
import { useLogin } from "./context/authContext";

function App() {
  const subdomain = extractSubdomain();

  console.log("🚀 ~ App ~ subdomain:", subdomain)

  const { isLoggedIn } = useLogin();

  if (subdomain) {
    // Public-facing site (for visitors)
    return <PublicSite subdomain={subdomain} />;
  }

  // Main domain (for organizers)
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login />}
        />
        <Route
          path="/dashboard/*"
          element={isLoggedIn ? <DashboardLayout /> : <Navigate to="/login" />}
        />
        <Route
          path="*"
          element={<Navigate to={isLoggedIn ? "/dashboard" : "/login"} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
