
import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const handleLogout = () => {
    // Login page par redirect
    // navigate("/");
  };
  return (
    <div
      className="bg-dark text-white p-3"
      style={{
        width: "240px",
        minHeight: "calc(100vh - 56px)"
      }}
    >
      

      <div className="nav flex-column gap-2">

        <NavLink
          to="/"
          className="nav-link text-white"
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/screening"
          className="nav-link text-white"
        >
          New Screening
        </NavLink>

        <NavLink
          to="/documents"
          className="nav-link text-white"
        >
          Documents
        </NavLink>

        

        <NavLink
          to="/analytics"
          className="nav-link text-white"
        >
          Analytics
        </NavLink>

        <NavLink
          to="/audit-trail"
          className="nav-link text-white"
        >
          Audit Trail
        </NavLink>


      </div>
      <div className="p-3 border-top border-secondary">

        <button
          className="btn btn-danger w-100 fw-semibold"
          onClick={handleLogout}
        >
          <i className="bi bi-box-arrow-right me-2"></i>
          Logout
        </button>

      </div>

      <div className="border-top mt-4 pt-3">
        <small className="text-secondary">
          Officer
        </small>

        <div>
          Immigration Officer Name
        </div>

        <small className="text-success">
          ● Online
        </small>
      </div>
    </div>
  );
}

export default Sidebar;
