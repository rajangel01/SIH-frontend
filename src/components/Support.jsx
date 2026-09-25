import React from "react";
import "./Support.css"

const teamMembers = [
  {
    name: "Raj Kumar",
    role: "Team Lead/Blockchain Developer",
    email: "rajkumar.cs.2025@bhu.ac.in",
    phone: "+91 8207644020",
    image: "https://res.cloudinary.com/drpeeigze/image/upload/v1790162322/raj_2_mli4yy.jpg",
  },
  {
    name: "Harshit Prajapati",
    role: "AI/ML Developer",
    email: "harshitprajapati.cs.2025@bhu.ac.in",
    phone: "+91 7505117620",
    image: "https://res.cloudinary.com/drpeeigze/image/upload/v1790162348/harshit_kvtu6z.jpg",
  },
  {
    name: "Brijesh Mourya",
    role: "Backend Developer",
    email: "brijeshmourya.cs.2025@bhu.ac.in",
    phone: "+91 9521844332",
    image: "https://res.cloudinary.com/drpeeigze/image/upload/v1790163489/brijesh_mooeqz.jpg",
  },
  {
    name: "Priyanka",
    role: "Frontend Developer",
    email: "priyanka.cs.2025@bhu.ac.in",
    phone: "+91 98XXXXXX44",
    image: "https://res.cloudinary.com/drpeeigze/image/upload/v1790162347/Priyanka_rexpes.jpg",
  },
  {
    name: "Sourav Kumar Show",
    role: "AI & Computer Vision Engineer",
    email: "souravshow.cs.2025@bhu.ac.in",
    phone: "+91 9800274985",
    image: "https://res.cloudinary.com/drpeeigze/image/upload/v1790162347/Sourav_i6p3si.jpg",
  },
  {
    name: "Mohit Mankas",
    role: "Project Testing",
    email: "mohitmankas.cs.2025@bhu.ac.in",
    phone: "+91 8168243170",
    image: "https://res.cloudinary.com/drpeeigze/image/upload/v1790335239/mohit_q3oau9.jpg",
  },
];

const Support = () => {
  return (
    <section className="support-section py-5">
      <div className="container">

        <div className="text-center mb-5">
          

          <h2 className="fw-bold">
            Contact Our Developer Team
          </h2>

          <p className="text-muted mx-auto" style={{ maxWidth: "650px" }}>
            Need technical assistance or facing an issue with the portal?
            Our dedicated support team is available to help you.
          </p>
        </div>

        <div className="row g-4">

          {teamMembers.map((member, index) => (
            <div className="col-lg-4 col-md-6" key={index}>

              <div className="card team-card h-100 border-0 shadow-sm">

                <div className="card-body text-center p-4">

                  <div className="profile-wrapper mx-auto mb-3">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="profile-img"
                    />
                  </div>

                  <h5 className="fw-bold mb-1">
                    {member.name}
                  </h5>

                  <p className="text-primary fw-semibold mb-3">
                    {member.role}
                  </p>

                  <hr />

                  <div className="text-start small text-muted mb-3">

                    <div className="mb-2">
                      <i className="bi bi-envelope me-2 text-primary"></i>
                      {member.email}
                    </div>

                    <div>
                      <i className="bi bi-telephone me-2 text-primary"></i>
                      {member.phone}
                    </div>

                  </div>

                  <a
                    href={`mailto:${member.email}`}
                    className="btn btn-outline-primary w-100"
                  >
                    <i className="bi bi-envelope me-2"></i>
                    Contact
                  </a>

                </div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Support;
