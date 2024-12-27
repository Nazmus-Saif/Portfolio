import React from "react";

const educationsSection = [
  {
    universityName: "Eastern University",
    degreeTimeline: "Feb 2020 - Feb 2024 | Dhaka, Bangladesh",
    degreeName: "Bachelor of Science in Computer Science and Engineering",
  },
];

const Education = () => (
  <section className="educations">
    <div className="educations-title-wrapper">
      <div className="icon-box">
        <ion-icon name="book-outline"></ion-icon>
      </div>
      <h3 className="h3">Education</h3>
    </div>

    <ol className="educations-list">
      {educationsSection.map((education, index) => (
        <li key={index} className="educations-item">
          <h4 className="h4 educations-item-title">{education.universityName}</h4>
          <span>{education.degreeTimeline}</span>
          <p className="educations-item-text">{education.degreeName}</p>
        </li>
      ))}
    </ol>
  </section>
);

export default Education;
