
import React, { useState } from "react";

function NewScreening() {
  const [documentType, setDocumentType] = useState("Passport");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleScreening = () => {
    if (!file) {
      alert("Please upload a document first.");
      return;
    }

    alert("AI Document Screening Started!");
  };

  return (
    <div className="p-4">

      {/* Page Header */}
      <div className="mb-4">
        <h2 className="fw-bold">New Screening</h2>

        <p className="text-muted">
          Upload a travel or identity document for AI-powered screening.
        </p>
      </div>

      <div className="row g-4">

        {/* Left Section */}
        <div className="container-fluid">

          <div className="card border-0 shadow-sm">

            <div className="card-body p-4">

              <h5 className="fw-bold mb-4">
                Document Information
              </h5>

              {/* Document Type */}
              <div className="mb-4">

                <label className="form-label fw-semibold">
                  Document Type
                </label>

                <select
                  className="form-select"
                  value={documentType}
                  onChange={(e) =>
                    setDocumentType(e.target.value)
                  }
                >
                  <option>Passport</option>
                  <option>Visa</option>
                  <option>National ID</option>
                  <option>Driving Licence</option>
                  <option>Travel Permit</option>
                </select>

              </div>

              {/* Upload Area */}
              <div className="mb-4">

                <label className="form-label fw-semibold">
                  Upload Document
                </label>

                <div
                  className="border rounded p-5 text-center"
                  style={{
                    borderStyle: "dashed",
                    backgroundColor: "#f8f9fa"
                  }}
                >

                  <div className="fs-1 mb-2">
                    📄
                  </div>

                  <h6 className="fw-bold">
                    Upload {documentType}
                  </h6>

                  <p className="text-muted small">
                    Supported formats: JPG, JPEG, PNG, PDF
                  </p>

                  <input
                    type="file"
                    className="form-control"
                    accept=".jpg,.jpeg,.png,.pdf"
                    onChange={handleFileChange}
                  />

                </div>

              </div>

              {/* Selected File */}
              {file && (
                <div className="alert alert-success">

                  <strong>Selected Document:</strong>

                  <br />

                  {file.name}

                </div>
              )}

              {/* Start Button */}
              <button
                className="btn btn-primary w-100 py-2"
                onClick={handleScreening}
              >
                Start AI Screening
              </button>

            </div>

          </div>

        </div>

        

      </div>

    </div>
  );
}

export default NewScreening;
