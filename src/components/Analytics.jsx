import React from "react";

function Analytics() {
  return (
    <div className="container-fluid p-4">

      {/* Header */}
      <div className="mb-4">
        <h3 className="fw-bold mb-1">
          <i className="bi bi-bar-chart-line me-2"></i>
          Screening Analytics
        </h3>

        <p className="text-muted mb-0">
          Analyze document screening activity and AI detection performance
        </p>
      </div>

      {/* Date Filter */}
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body">
          <div className="row align-items-center">

            <div className="col-md-4">
              <label className="form-label fw-semibold">
                Analytics Period
              </label>

              <select className="form-select">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
                <option>Last 3 Months</option>
                <option>This Year</option>
              </select>
            </div>

            <div className="col-md-8 text-md-end mt-3 mt-md-0">
              <span className="badge bg-success-subtle text-success px-3 py-2">
                <i className="bi bi-arrow-up me-1"></i>
                0% increase in screenings
              </span>
            </div>

          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="row g-3 mb-4">

        {/* Total */}
        <div className="col-xl-3 col-md-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">

              <div className="d-flex justify-content-between">
                <div>
                  <small className="text-muted">
                    Total Screenings
                  </small>

                  <h3 className="fw-bold mt-2 mb-1">
                    0
                  </h3>

                  
                </div>

                <div className="bg-primary-subtle text-primary rounded p-3">
                  <i className="bi bi-shield-check fs-4"></i>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Genuine */}
        <div className="col-xl-3 col-md-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">

              <div className="d-flex justify-content-between">
                <div>
                  <small className="text-muted">
                    Genuine Documents
                  </small>

                  <h3 className="fw-bold text-success mt-2 mb-1">
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

        {/* Suspicious */}
        <div className="col-xl-3 col-md-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">

              <div className="d-flex justify-content-between">
                <div>
                  <small className="text-muted">
                    Suspicious
                  </small>

                  <h3 className="fw-bold text-warning mt-2 mb-1">
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

        {/* High Risk */}
        <div className="col-xl-3 col-md-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">

              <div className="d-flex justify-content-between">
                <div>
                  <small className="text-muted">
                    High Risk
                  </small>

                  <h3 className="fw-bold text-danger mt-2 mb-1">
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

      {/* Charts Row */}
      <div className="row g-4 mb-4">

        {/* Screening Trend */}
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm h-100">

            <div className="card-header bg-white border-0 pt-4 px-4">
              <h5 className="fw-bold mb-1">
                Screening Trend
              </h5>

              <small className="text-muted">
                Number of documents screened per day
              </small>
            </div>

            <div className="card-body">

              <div
                className="d-flex align-items-end justify-content-between"
                style={{ height: "260px" }}
              >

                {[
                  ["10 Sep", 0],
                  ["11 Sep", 0],
                  ["12 Sep", 0],
                  ["13 Sep", 0],
                  ["14 Sep", 0],
                  ["15 Sep", 0],
                  ["16 Sep", 0],
                ].map(([day, value]) => (

                  <div
                    key={day}
                    className="text-center"
                    style={{ width: "12%" }}
                  >

                    <div
                      className="bg-primary rounded-top mx-auto"
                      style={{
                        width: "35px",
                        height: `${value * 2}px`,
                        maxHeight: "210px",
                      }}
                      title={`${value}% activity`}
                    ></div>

                    <small className="text-muted d-block mt-2">
                      {day}
                    </small>

                  </div>

                ))}

              </div>

            </div>
          </div>
        </div>

        {/* Risk Distribution */}
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm h-100">

            <div className="card-header bg-white border-0 pt-4 px-4">
              <h5 className="fw-bold mb-1">
                Risk Distribution
              </h5>

              <small className="text-muted">
                Screening result classification
              </small>
            </div>

            <div className="card-body">

              {/* Genuine */}
              <div className="mb-4">

                <div className="d-flex justify-content-between mb-1">
                  <span>
                    <i className="bi bi-check-circle text-success me-2"></i>
                    Genuine
                  </span>

                  <strong>0%</strong>
                </div>

                <div className="progress" style={{ height: "8px" }}>
                  <div
                    className="progress-bar bg-success"
                    style={{ width: "0%" }}
                  ></div>
                </div>

              </div>

              {/* Suspicious */}
              <div className="mb-4">

                <div className="d-flex justify-content-between mb-1">
                  <span>
                    <i className="bi bi-exclamation-triangle text-warning me-2"></i>
                    Suspicious
                  </span>

                  <strong>0%</strong>
                </div>

                <div className="progress" style={{ height: "8px" }}>
                  <div
                    className="progress-bar bg-warning"
                    style={{ width: "0%" }}
                  ></div>
                </div>

              </div>

              {/* High Risk */}
              <div>

                <div className="d-flex justify-content-between mb-1">
                  <span>
                    <i className="bi bi-shield-exclamation text-danger me-2"></i>
                    High Risk
                  </span>

                  <strong>0%</strong>
                </div>

                <div className="progress" style={{ height: "8px" }}>
                  <div
                    className="progress-bar bg-danger"
                    style={{ width: "0%" }}
                  ></div>
                </div>

              </div>

              <hr />

              <div className="text-center mt-4">
                <h4 className="fw-bold mb-1">0</h4>
                <small className="text-muted">
                  Documents analyzed
                </small>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Document Type + AI Detection */}
      <div className="row g-4">

        {/* Document Types */}
        <div className="col-lg-6">
          <div className="card border-0 shadow-sm">

            <div className="card-header bg-white border-0 pt-4 px-4">
              <h5 className="fw-bold mb-1">
                Documents by Type
              </h5>

              <small className="text-muted">
                Distribution of screened documents
              </small>
            </div>

            <div className="card-body">

              {/* Passport */}
              <div className="mb-4">

                <div className="d-flex justify-content-between mb-2">
                  <span>
                    <i className="bi bi-passport me-2 text-primary"></i>
                    Passport
                  </span>

                  <strong>0</strong>
                </div>

                <div className="progress" style={{ height: "9px" }}>
                  <div
                    className="progress-bar bg-primary"
                    style={{ width: "0%" }}
                  ></div>
                </div>

              </div>

              {/* Visa */}
              <div className="mb-4">

                <div className="d-flex justify-content-between mb-2">
                  <span>
                    <i className="bi bi-file-earmark-text me-2 text-info"></i>
                    Visa
                  </span>

                  <strong>0</strong>
                </div>

                <div className="progress" style={{ height: "9px" }}>
                  <div
                    className="progress-bar bg-info"
                    style={{ width: "0%" }}
                  ></div>
                </div>

              </div>

              {/* Other */}
              <div>

                <div className="d-flex justify-content-between mb-2">
                  <span>
                    <i className="bi bi-card-text me-2 text-secondary"></i>
                    Other Documents
                  </span>

                  <strong>0</strong>
                </div>

                <div className="progress" style={{ height: "9px" }}>
                  <div
                    className="progress-bar bg-secondary"
                    style={{ width: "0%" }}
                  ></div>
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* AI Detection */}
        <div className="col-lg-6">
          <div className="card border-0 shadow-sm">

            <div className="card-header bg-white border-0 pt-4 px-4">
              <h5 className="fw-bold mb-1">
                AI Detection Results
              </h5>

              <small className="text-muted">
                Issues detected by AI screening modules
              </small>
            </div>

            <div className="card-body">

              {/* Tampering */}
              <div className="d-flex justify-content-between align-items-center border-bottom py-3">

                <div>
                  <div className="fw-semibold">
                    <i className="bi bi-image me-2"></i>
                    Document Tampering
                  </div>

                  <small className="text-muted">
                    Altered or manipulated documents
                  </small>
                </div>

                <span className="badge bg-danger-subtle text-danger">
                  0 Detected
                </span>

              </div>

              {/* Face mismatch */}
              <div className="d-flex justify-content-between align-items-center border-bottom py-3">

                <div>
                  <div className="fw-semibold">
                    <i className="bi bi-person-bounding-box me-2"></i>
                    Face Mismatch
                  </div>

                  <small className="text-muted">
                    Identity verification mismatch
                  </small>
                </div>

                <span className="badge bg-warning-subtle text-warning">
                  0 Detected
                </span>

              </div>

              {/* Expired */}
              <div className="d-flex justify-content-between align-items-center border-bottom py-3">

                <div>
                  <div className="fw-semibold">
                    <i className="bi bi-calendar-x me-2"></i>
                    Expired Documents
                  </div>

                  <small className="text-muted">
                    Documents past expiration date
                  </small>
                </div>

                <span className="badge bg-warning-subtle text-warning">
                  0 Detected
                </span>

              </div>

              {/* Identity */}
              <div className="d-flex justify-content-between align-items-center py-3">

                <div>
                  <div className="fw-semibold">
                    <i className="bi bi-person-x me-2"></i>
                    Identity Anomaly
                  </div>

                  <small className="text-muted">
                    Possible identity inconsistency
                  </small>
                </div>

                <span className="badge bg-danger-subtle text-danger">
                  0 Detected
                </span>

              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Bottom Insight */}
      <div className="card border-0 shadow-sm mt-4">
        <div className="card-body">

          <div className="d-flex align-items-start">

            <div className="bg-primary-subtle text-primary rounded p-3 me-3">
              <i className="bi bi-lightbulb fs-4"></i>
            </div>

            <div>
              <h6 className="fw-bold">
                Screening Insight
              </h6>

              <p className="text-muted mb-0">
                AI screening has identified 0 documents requiring
                additional verification. Most anomalies were related to
                document tampering, face mismatch and expired documents.
                Final verification decisions should be made by the
                authorized immigration officer.
              </p>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}

export default Analytics;