
import React, { useState } from "react";

const auditData = [
  
];

function AuditTrail() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredData = auditData.filter((item) => {
    const matchesFilter =
      filter === "All" ||
      (filter === "Genuine" && item.status === "Genuine") ||
      (filter === "Suspicious" && item.status === "Suspicious") ||
      (filter === "High Risk" && item.status === "High Risk") ||
      (filter === "Tampering" &&
        item.action === "Tampering Detected") ||
      (filter === "Face Verification" &&
        item.action === "Face Verification Failed");

    const searchText = search.toLowerCase();

    const matchesSearch =
      item.passenger.toLowerCase().includes(searchText) ||
      item.officer.toLowerCase().includes(searchText) ||
      item.documentNo.toLowerCase().includes(searchText) ||
      item.action.toLowerCase().includes(searchText) ||
      item.checkpoint.toLowerCase().includes(searchText);

    return matchesFilter && matchesSearch;
  });

  const getStatusClass = (status) => {
    if (status === "Genuine") {
      return "bg-success-subtle text-success";
    }

    if (status === "Suspicious") {
      return "bg-warning-subtle text-warning";
    }

    return "bg-danger-subtle text-danger";
  };

  const getActionClass = (action) => {
    if (action === "Tampering Detected") {
      return "text-danger";
    }

    if (action === "Face Verification Failed") {
      return "text-warning";
    }

    if (action === "High Risk Detected") {
      return "text-danger";
    }

    return "text-primary";
  };

  return (
    <div className="container-fluid p-4">

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h3 className="fw-bold mb-1">
            <i className="bi bi-clock-history me-2"></i>
            Audit Trail
          </h3>

          <p className="text-muted mb-0">
            Complete activity log of document screening and system actions
          </p>
        </div>

        
      </div>

      {/* Security Information */}
      <div className="alert alert-primary border-0 shadow-sm d-flex align-items-center mb-4">
        <i className="bi bi-shield-lock fs-4 me-3"></i>

        <div>
          <strong>Audit Trail Protected</strong>

          <div className="small mt-1">
            Screening activities are recorded with timestamps and
            blockchain transaction references for audit verification.
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="row g-3 mb-4">

        <div className="col-md-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">

              <div className="d-flex justify-content-between">

                <div>
                  <small className="text-muted">
                    Total Activities
                  </small>

                  <h3 className="fw-bold mt-2 mb-0">
                    0
                  </h3>
                </div>

                <div className="bg-primary-subtle text-primary rounded p-3">
                  <i className="bi bi-list-check fs-4"></i>
                </div>

              </div>

            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">

              <div className="d-flex justify-content-between">

                <div>
                  <small className="text-muted">
                    Today's Activities
                  </small>

                  <h3 className="fw-bold mt-2 mb-0">
                    0
                  </h3>
                </div>

                <div className="bg-info-subtle text-info rounded p-3">
                  <i className="bi bi-calendar-day fs-4"></i>
                </div>

              </div>

            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">

              <div className="d-flex justify-content-between">

                <div>
                  <small className="text-muted">
                    Blockchain Records
                  </small>

                  <h3 className="fw-bold text-success mt-2 mb-0">
                    0
                  </h3>
                </div>

                <div className="bg-success-subtle text-success rounded p-3">
                  <i className="bi bi-link-45deg fs-4"></i>
                </div>

              </div>

            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">

              <div className="d-flex justify-content-between">

                <div>
                  <small className="text-muted">
                    Security Alerts
                  </small>

                  <h3 className="fw-bold text-danger mt-2 mb-0">
                    0
                  </h3>
                </div>

                <div className="bg-danger-subtle text-danger rounded p-3">
                  <i className="bi bi-exclamation-octagon fs-4"></i>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Audit Log */}
      <div className="card border-0 shadow-sm">

        {/* Filter Header */}
        <div className="card-header bg-white border-0 p-3">

          <div className="row g-3 align-items-center">

            <div className="col-lg-5">

              <div className="input-group">

                <span className="input-group-text bg-white">
                  <i className="bi bi-search"></i>
                </span>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Search passenger, officer, action..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />

              </div>

            </div>

            <div className="col-lg-7">

              <div className="d-flex justify-content-lg-end gap-2 flex-wrap">

                {[
                  "All",
                  "Genuine",
                  "Suspicious",
                  "High Risk",
                  "Tampering",
                  "Face Verification",
                ].map((item) => (

                  <button
                    key={item}
                    className={`btn btn-sm ${
                      filter === item
                        ? "btn-dark"
                        : "btn-outline-secondary"
                    }`}
                    onClick={() => setFilter(item)}
                  >
                    {item}
                  </button>

                ))}

              </div>

            </div>

          </div>

        </div>

        {/* Table */}
        <div className="table-responsive">

          <table className="table table-hover align-middle mb-0">

            <thead className="table-light">

              <tr>
                <th className="ps-4">Date & Time</th>
                <th>Officer</th>
                <th>Passenger</th>
                <th>Action</th>
                <th>Document</th>
                <th>Risk</th>
                <th>Status</th>
                <th>Blockchain</th>
                <th>Details</th>
              </tr>

            </thead>

            <tbody>

              {filteredData.length > 0 ? (

                filteredData.map((item) => (

                  <tr key={item.id}>

                    {/* Time */}
                    <td className="ps-4">
                      <div className="fw-semibold">
                        {item.time.split(",")[0]}
                      </div>

                      <small className="text-muted">
                        {item.time.split(",")[1]}
                      </small>
                    </td>

                    {/* Officer */}
                    <td>

                      <div className="fw-semibold">
                        {item.officer}
                      </div>

                      <small className="text-muted">
                        {item.officerId}
                      </small>

                    </td>

                    {/* Passenger */}
                    <td>

                      <div className="fw-semibold">
                        {item.passenger}
                      </div>

                      <small className="text-muted">
                        {item.checkpoint}
                      </small>

                    </td>

                    {/* Action */}
                    <td>

                      <span className={`fw-semibold ${getActionClass(item.action)}`}>

                        <i
                          className={`bi ${
                            item.action === "Tampering Detected"
                              ? "bi-image"
                              : item.action ===
                                "Face Verification Failed"
                              ? "bi-person-x"
                              : item.action ===
                                "High Risk Detected"
                              ? "bi-shield-exclamation"
                              : "bi-file-check"
                          } me-2`}
                        ></i>

                        {item.action}

                      </span>

                    </td>

                    {/* Document */}
                    <td>

                      <div>
                        {item.document}
                      </div>

                      <small className="text-muted">
                        {item.documentNo}
                      </small>

                    </td>

                    {/* Risk */}
                    <td>

                      <span
                        className={`fw-bold ${
                          item.risk <= 30
                            ? "text-success"
                            : item.risk <= 70
                            ? "text-warning"
                            : "text-danger"
                        }`}
                      >
                        {item.risk}/100
                      </span>

                    </td>

                    {/* Status */}
                    <td>

                      <span
                        className={`badge rounded-pill px-3 py-2 ${getStatusClass(
                          item.status
                        )}`}
                      >
                        {item.status}
                      </span>

                    </td>

                    {/* Blockchain */}
                    <td>

                      <span className="badge bg-success-subtle text-success">
                        <i className="bi bi-check-circle me-1"></i>
                        {item.blockchain}
                      </span>

                      <div>
                        <small
                          className="text-muted"
                          style={{ fontSize: "11px" }}
                        >
                          {item.txHash}
                        </small>
                      </div>

                    </td>

                    {/* Details */}
                    <td>

                      <button
                        className="btn btn-sm btn-outline-dark"
                        onClick={() =>
                          alert(
                            `Audit Details\n\nOfficer: ${item.officer}\nPassenger: ${item.passenger}\nAction: ${item.action}\nDocument: ${item.document}\nRisk Score: ${item.risk}\nBlockchain TX: ${item.txHash}`
                          )
                        }
                      >
                        <i className="bi bi-eye"></i>
                      </button>

                    </td>

                  </tr>

                ))

              ) : (

                <tr>
                  <td colSpan="9" className="text-center py-5">

                    <i className="bi bi-search fs-1 text-muted"></i>

                    <p className="text-muted mt-2 mb-0">
                      No audit records found
                    </p>

                  </td>
                </tr>

              )}

            </tbody>

          </table>

        </div>

        {/* Footer */}
        <div className="card-footer bg-white border-0 py-3">

          <div className="d-flex justify-content-between align-items-center">

            <small className="text-muted">
              Showing {filteredData.length} audit records
            </small>

            <div>

              <button className="btn btn-sm btn-outline-secondary me-1">
                <i className="bi bi-chevron-left"></i>
              </button>

              <button className="btn btn-sm btn-dark">
                1
              </button>

              <button className="btn btn-sm btn-outline-secondary ms-1">
                <i className="bi bi-chevron-right"></i>
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* Blockchain Verification */}
      <div className="card border-0 shadow-sm mt-4">

        <div className="card-body">

          <div className="row align-items-center">

            <div className="col-md-8">

              <div className="d-flex align-items-center">

                <div className="bg-success-subtle text-success rounded p-3 me-3">
                  <i className="bi bi-boxes fs-3"></i>
                </div>

                <div>

                  <h5 className="fw-bold mb-1">
                    Blockchain Audit Status
                  </h5>

                  <p className="text-muted mb-0">
                    Audit records are cryptographically linked and
                    recorded on the permissioned blockchain network.
                  </p>

                </div>

              </div>

            </div>

            <div className="col-md-4 text-md-end mt-3 mt-md-0">

              <span className="badge bg-success px-3 py-2">
                <i className="bi bi-check-circle me-1"></i>
                Network Operational
              </span>

              <div className="small text-muted mt-2">
                Hyperledger Fabric
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AuditTrail;