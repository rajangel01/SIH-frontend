import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import NewScreening from "./components/NewScreening";
import Documents from "./components/Documents";
import Analytics from "./components/Analytics";
import AuditTrail from "./components/AuditTrail";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Support from "./components/Support"

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-vh-100">

        {/* Navbar */}
        <Navbar
          setIsSidebarOpen={setIsSidebarOpen}
        />

        <div className="d-flex">

          {/* Sidebar */}
          <Sidebar
            isOpen={isSidebarOpen}
            setIsOpen={setIsSidebarOpen}
          />

          {/* Main Content */}
          <main
            className="flex-grow-1 bg-light"
            style={{
              minHeight: "calc(100vh - 56px)",
              width: "100%",
            }}
          >
            <Routes>

              <Route path="/" element={<Dashboard />} />

              <Route
                path="/screening"
                element={<NewScreening />}
              />

              <Route
                path="/documents"
                element={<Documents />}
              />

              <Route
                path="/analytics"
                element={<Analytics />}
              />

              <Route
                path="/audit-trail"
                element={<AuditTrail />}
              />

              <Route
                path="/support"
                element={<Support />}
              />

              {/* Unknown URL */}
              <Route
                path="*"
                element={<Navigate to="/" replace />}
              />

            </Routes>
          </main>

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;