import React from "react";

const certificatesSection = [
  {
    certificateTitle: "Software Engineer",
    obtainedDate: "Mar 2024",
    certificateID: "B9A0FEC87083",
  },
  {
    certificateTitle: "Software Engineer Intern",
    obtainedDate: "Mar 2024",
    certificateID: "335310144489",
  },
  {
    certificateTitle: "JavaScript (Intermediate)",
    obtainedDate: "Apr 2024",
    certificateID: "3D79A976BCD5",
  },
  {
    certificateTitle: "JavaScript (Basic)",
    obtainedDate: "Apr 2024",
    certificateID: "7826B3EB96B5",
  },
  {
    certificateTitle: "Rest API (Intermediate)",
    obtainedDate: "Mar 2024",
    certificateID: "57AAD36D224E",
  },
  {
    certificateTitle: "Problem Solving (Intermediate)",
    obtainedDate: "Feb 2024",
    certificateID: "0F347F6645AD",
  },
  {
    certificateTitle: "Problem Solving (Basic)",
    obtainedDate: "Mar 2024",
    certificateID: "6054E95D0DD9",
  },
  {
    certificateTitle: "Python (Basic)",
    obtainedDate: "Feb 2024",
    certificateID: "3C8EDA2AC34D",
  },
  {
    certificateTitle: "SQL (Advanced)",
    obtainedDate: "Feb 2024",
    certificateID: "B5AF08BD79A4",
  },
  {
    certificateTitle: "SQL (Intermediate)",
    obtainedDate: "Feb 2024",
    certificateID: "6713BD927142",
  },
  {
    certificateTitle: "SQL (Basic)",
    obtainedDate: "Feb 2024",
    certificateID: "08A1462676C1",
  },
  {
    certificateTitle: "Java (Basic)",
    obtainedDate: "Mar 2024",
    certificateID: "4D878C83635C",
  },
];

const Certifications = () => (
  <section className="certifications">
    <h3 className="h3 certifications-title">Certifications</h3>
    <ul className="certifications-list content-card">
      {certificatesSection.map((cert, index) => (
        <li key={index} className="certifications-item">
          <div className="certifications-title-wrapper">
            <h5 className="h5">{cert.certificateTitle}</h5>
          </div>
          <div className="cetifications-details">
            <p className="certifications-item-text">
              Issued {cert.obtainedDate}
            </p>
            <p className="certifications-item-text">
              Credential ID {cert.certificateID}
            </p>
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export default Certifications;
