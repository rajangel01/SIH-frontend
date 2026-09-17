import React from "react";

function Navbar({ setIsSidebarOpen }) {
  return (
    <nav className="navbar navbar-dark bg-dark px-3">

      <div className="d-flex align-items-center">

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="btn btn-outline-light d-md-none me-2"
          onClick={() => setIsSidebarOpen(true)}
        >
          {/* <i className="bi bi-list fs-4"></i> */}
          <i class="fa-solid fa-bars"></i>
        </button>

        {/* Logo */}
        <span className="navbar-brand fw-bold mb-0">
          <i className="bi bi-shield-check me-2"></i>
          AI Border Screening
        </span>

      </div>

      {/* Officer */}
      <div className="text-white d-none d-sm-block">
        <i className="bi bi-person-circle me-2"></i>
        Immigration Officer
      </div>

    </nav>
  );
}

export default Navbar;