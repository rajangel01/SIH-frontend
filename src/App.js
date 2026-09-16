import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Components
import Dashboard from "./components/Dashboard";
import NewScreening from "./components/NewScreening";
import Documents from "./components/Documents";
// import Alerts from "./components/Alerts";
import Analytics from "./components/Analytics";
import AuditTrail from "./components/AuditTrail";
// import Settings from "./components/Settings";
// import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {" "}
        {/* Login Page <Route path="/" element={<Login />} />{" "} */}
        {/* Main Application */}{" "}
        <Route
          path="*"
          element={
            <>
              {" "}
              {/* Top Navbar */} <Navbar />{" "}
              <div className="d-flex">
                {" "}
                {/* Left Sidebar */} <Sidebar /> {/* Main Content */}{" "}
                <main
                  className="flex-grow-1 bg-light"
                  style={{ minHeight: "calc(100vh - 56px)" }}
                >
                  {" "}
                  <Routes>
                    {" "}
                    <Route path="/" element={<Dashboard />} />{" "}
                    <Route path="/screening" element={<NewScreening />} />{" "}
                    <Route path="/documents" element={<Documents />} />{" "}
                    {/* <Route path="/alerts" element={<Alerts />} />{" "} */}
                    <Route path="/analytics" element={<Analytics />} />{" "}
                    <Route path="/audit-trail" element={<AuditTrail />} />{" "}
                    {/* <Route path="/settings" element={<Settings />} />{" "} */}
                    {/* Default */}{" "}
                    <Route
                      path="*"
                      element={<Navigate to="/dashboard" replace />}
                    />{" "}
                  </Routes>{" "}
                </main>{" "}
              </div>{" "}
            </>
          }
        />{" "}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
