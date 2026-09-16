
import React from "react";

function Dashboard() {
  return (
    <div className="container-fluid p-4">

      {/* Header */}
      <div className="mb-4">
        <h2 className="fw-bold mb-1">Dashboard</h2>
        <p className="text-muted mb-0">
          Border Document Screening Overview
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="row g-4 mb-4">

        {/* Total Screening */}
        <div className="col-md-6 col-xl-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <p className="text-muted mb-2">
                    Total Screenings
                  </p>

                  <h2 className="fw-bold mb-0">
                    0
                  </h2>

                  <small className="text-muted">
                    All time
                  </small>
                </div>

                
              </div>
            </div>
          </div>
        </div>

        {/* Today's Screening */}
        <div className="col-md-6 col-xl-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <p className="text-muted mb-2">
                    Today's Screenings
                  </p>

                  <h2 className="fw-bold mb-0">
                  0
                  </h2>

                  
                </div>

               
              </div>
            </div>
          </div>
        </div>

        {/* Genuine */}
        <div className="col-md-6 col-xl-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <p className="text-muted mb-2">
                    Genuine Documents
                  </p>

                  <h2 className="fw-bold text-success mb-0">
                    0
                  </h2>

                  
                </div>

                
              </div>
            </div>
          </div>
        </div>

        {/* Suspicious */}
        <div className="col-md-6 col-xl-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <p className="text-muted mb-2">
                    Suspicious / High Risk
                  </p>

                  <h2 className="fw-bold text-danger mb-0">
                    0
                  </h2>

                  
                </div>

                
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Second Row Statistics */}
      <div className="row g-4 mb-4">

        <div className="col-md-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <p className="text-muted mb-2">
                Passports Screened
              </p>

              <h3 className="fw-bold">
                0
              </h3>

              <div className="progress mt-3" style={{ height: "8px" }}>
                <div
                  className="progress-bar"
                  style={{ width: "0%" }}
                ></div>
              </div>

              
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <p className="text-muted mb-2">
                Visas Screened
              </p>

              <h3 className="fw-bold">
                0
              </h3>

              <div className="progress mt-3" style={{ height: "8px" }}>
                <div
                  className="progress-bar"
                  style={{ width: "0%" }}
                ></div>
              </div>

              
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <p className="text-muted mb-2">
                Other Documents
              </p>

              <h3 className="fw-bold">
                0
              </h3>

              <div className="progress mt-3" style={{ height: "8px" }}>
                <div
                  className="progress-bar"
                  style={{ width: "0%" }}
                ></div>
              </div>

              
            </div>
          </div>
        </div>

      </div>

      {/* Recent Screening List */}
      <div className="card border-0 shadow-sm">

        <div className="card-body p-4">

          <div className="d-flex justify-content-between align-items-center mb-3">

            <div>
              <h5 className="fw-bold mb-1">
                Recent Screenings
              </h5>

              <small className="text-muted">
                Latest documents screened at the checkpoint
              </small>
            </div>

            <button className="btn btn-outline-primary btn-sm">
              View All
            </button>

          </div>

          <div className="table-responsive">

            <table className="table table-hover align-middle mb-0">

              <thead className="table-light">
                <tr>
                  <th>#</th>
                  <th>Passenger</th>
                  <th>Document</th>
                  <th>Document No.</th>
                  <th>Date & Time</th>
                  <th>Risk Score</th>
                  <th>Status</th>
                </tr>
              </thead>

              

            </table>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;
