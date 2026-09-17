import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Navbar setIsSidebarOpen={setIsSidebarOpen} />

      <div className="d-flex">
        <Sidebar
          isOpen={isSidebarOpen}
          setIsOpen={setIsSidebarOpen}
        />

        <main
          className="flex-grow-1 bg-light"
          style={{
            minHeight: "calc(100vh - 56px)",
            width: "100%",
          }}
        >
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Layout;