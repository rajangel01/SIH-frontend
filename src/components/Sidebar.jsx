import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar({ isOpen, setIsOpen }) {

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="sidebar-overlay"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`sidebar bg-dark text-white ${
          isOpen ? "sidebar-open" : ""
        }`}
      >

        {/* Mobile Header */}
        <div className="sidebar-mobile-header d-md-none">

          <span className="fw-bold">
            Menu
          </span>

          <button
            type="button"
            className="btn btn-sm btn-outline-light"
            onClick={closeSidebar}
          >
            {/* <i className="bi bi-x-lg"></i> */}
            <i class="fa-solid fa-circle-xmark"></i>
          </button>

        </div>

        {/* Navigation */}
        <div className="nav flex-column gap-2 p-3">

          <NavLink
            to="/"
            className="nav-link text-white"
            onClick={closeSidebar}
          >
            <i className="bi bi-speedometer2 me-2"></i>
            Dashboard
          </NavLink>

          <NavLink
            to="/screening"
            className="nav-link text-white"
            onClick={closeSidebar}
          >
            <i className="bi bi-search me-2"></i>
            New Screening
          </NavLink>

          <NavLink
            to="/documents"
            className="nav-link text-white"
            onClick={closeSidebar}
          >
            <i className="bi bi-file-earmark-text me-2"></i>
            Documents
          </NavLink>

          <NavLink
            to="/analytics"
            className="nav-link text-white"
            onClick={closeSidebar}
          >
            <i className="bi bi-bar-chart me-2"></i>
            Analytics
          </NavLink>

          <NavLink
            to="/audit-trail"
            className="nav-link text-white"
            onClick={closeSidebar}
          >
            <i className="bi bi-shield-check me-2"></i>
            Audit Trail
          </NavLink>

          <NavLink
            to="/support"
            className="nav-link text-white"
            onClick={closeSidebar}
          >
            <i className="bi bi-shield-check me-2"></i>
            Developer Team
          </NavLink>

        </div>

        {/* Bottom Section */}
        <div className="sidebar-bottom">

          <div className="border-top border-secondary pt-3">

            <button className="btn btn-danger w-100 fw-semibold mb-3">
              <i className="bi bi-box-arrow-right me-2"></i>
              Logout
            </button>

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

      </div>
    </>
  );
}

export default Sidebar;