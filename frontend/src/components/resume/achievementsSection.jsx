import React from "react";

const achievementsSection = [
  {
    universityName: "Eastern University",
    degreeTimeline: "June 2022 | Dhaka, Bangladesh",
    degreeName:
      "I was honored with the University Meritorious Student Award, which granted me a 100% tuition waiver in recognition of my exceptional academic performance throughout my BSc.",
  },
];

const AchievementsSection = () => (
  <section className="achievements">
    <div className="achievements-title-wrapper">
      <div className="icon-box">
        <ion-icon name="trophy-outline"></ion-icon>
      </div>
      <h3 className="h3">Achievements</h3>
    </div>

    <ol className="achievements-list">
      {achievementsSection.map((education, index) => (
        <li key={index} className="achievements-item">
          <h4 className="h4 achievements-item-title">{education.universityName}</h4>
          <span>{education.degreeTimeline}</span>
          <p className="achievements-item-text">{education.degreeName}</p>
        </li>
      ))}
    </ol>
  </section>
);

export default AchievementsSection;
