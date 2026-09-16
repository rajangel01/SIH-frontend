import React, { useState } from "react";

const documentsData = [
 
];

function Documents() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filteredDocuments = documentsData.filter((doc) => {
    const matchesFilter =
      filter === "All" ||
      (filter === "Genuine" && doc.status === "Genuine") ||
      (filter === "Suspicious" && doc.status === "Suspicious") ||
      (filter === "High Risk" && doc.status === "High Risk") ||
      (filter === "Passport" && doc.type === "Passport") ||
      (filter === "Visa" && doc.type === "Visa");

    const matchesSearch =
      doc.passenger.toLowerCase().includes(search.toLowerCase()) ||
      doc.number.toLowerCase().includes(search.toLowerCase()) ||
      doc.type.toLowerCase().includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const getStatusClass = (status) => {
    if (status === "Genuine") return "bg-success-subtle text-success";
    if (status === "Suspicious") return "bg-warning-subtle text-warning";
    return "bg-danger-subtle text-danger";
  };

  const getRiskClass = (risk) => {
    if (risk <= 30) return "text-success";
    if (risk <= 70) return "text-warning";
    return "text-danger";
  };

  return (
    <div className="container-fluid p-4">

      {/* Page Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h3 className="fw-bold mb-1">
            <i className="bi bi-file-earmark-text me-2"></i>
            Screened Documents
          </h3>
          <p className="text-muted mb-0">
            View and manage previously screened identity documents
          </p>
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
                    Total Documents
                  </small>
                  <h3 className="fw-bold mt-2 mb-0">0</h3>
                </div>

                <div className="bg-primary-subtle text-primary rounded p-3">
                  <i className="bi bi-files fs-4"></i>
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
                    Genuine
                  </small>
                  <h3 className="fw-bold text-success mt-2 mb-0">
                    0
                  </h3>
                </div>

                <div className="bg-success-subtle text-success rounded p-3">
                  <i className="bi bi-check-circle fs-4"></i>
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
                    Suspicious
                  </small>
                  <h3 className="fw-bold text-warning mt-2 mb-0">
                    0
                  </h3>
                </div>

                <div className="bg-warning-subtle text-warning rounded p-3">
                  <i className="bi bi-exclamation-triangle fs-4"></i>
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
                    High Risk
                  </small>
                  <h3 className="fw-bold text-danger mt-2 mb-0">
                    0
                  </h3>
                </div>

                <div className="bg-danger-subtle text-danger rounded p-3">
                  <i className="bi bi-shield-exclamation fs-4"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Main Card */}
      <div className="card border-0 shadow-sm">

        {/* Filters */}
        <div className="card-header bg-white border-0 p-3">

          <div className="row g-2 align-items-center">

            <div className="col-md-5">
              <div className="input-group">
                <span className="input-group-text bg-white">
                  <i className="bi bi-search"></i>
                </span>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Search passenger, document number..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            <div className="col-md-7">
              <div className="d-flex gap-2 justify-content-md-end flex-wrap">

                {[
                  "All",
                  "Genuine",
                  "Suspicious",
                  "High Risk",
                  "Passport",
                  "Visa",
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
                <th className="ps-4">Officer Name</th>
                <th>Document Type</th>
                <th>Document No.</th>
                <th>Screened At</th>
                <th>Risk Score</th>
                <th>Status</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>

            <tbody>

              {filteredDocuments.length > 0 ? (
                filteredDocuments.map((doc) => (

                  <tr key={doc.id}>

                    <td className="ps-4">
                      <div className="d-flex align-items-center">

                        <div
                          className="rounded-circle bg-secondary-subtle d-flex align-items-center justify-content-center me-2"
                          style={{
                            width: "38px",
                            height: "38px",
                          }}
                        >
                          <i className="bi bi-person"></i>
                        </div>

                        <div>
                          <div className="fw-semibold">
                            {doc.passenger}
                          </div>
                          
                        </div>

                      </div>
                    </td>

                    <td>
                      <i className="bi bi-file-earmark-text me-2 text-primary"></i>
                      {doc.type}
                    </td>

                    <td>
                      <code>{doc.number}</code>
                    </td>

                    <td>
                      <div>{doc.date}</div>
                      <small className="text-muted">
                        {doc.time}
                      </small>
                    </td>

                    <td>
                      <span className={`fw-bold ${getRiskClass(doc.risk)}`}>
                        {doc.risk}/100
                      </span>

                      <div
                        className="progress mt-1"
                        style={{ height: "5px", width: "80px" }}
                      >
                        <div
                          className={`progress-bar ${
                            doc.risk <= 30
                              ? "bg-success"
                              : doc.risk <= 70
                              ? "bg-warning"
                              : "bg-danger"
                          }`}
                          style={{ width: `${doc.risk}%` }}
                        ></div>
                      </div>
                    </td>

                    <td>
                      <span
                        className={`badge rounded-pill px-3 py-2 ${getStatusClass(
                          doc.status
                        )}`}
                      >
                        {doc.status}
                      </span>
                    </td>

                    <td className="text-center">
                      <button
                        className="btn btn-sm btn-outline-dark"
                        title="View screening details"
                        onClick={() =>
                          alert(
                            `Screening details for ${doc.passenger}`
                          )
                        }
                      >
                        <i className="bi bi-eye me-1"></i>
                        View
                      </button>
                    </td>

                  </tr>

                ))
              ) : (

                <tr>
                  <td colSpan="7" className="text-center py-5">
                    <i className="bi bi-search fs-2 text-muted"></i>
                    <p className="text-muted mt-2 mb-0">
                      No documents found
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
              Showing {filteredDocuments.length} of{" "}
              {documentsData.length} records
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

    </div>
  );
}

export default Documents;