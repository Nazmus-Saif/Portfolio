import React from "react";

const experiencesSection = [
  {
    experienceField: "Brain Station 23 | Software Engineer I",
    experienceTimeline: "Mar 2025 – Present | Mohakhali, Dhaka, Bangladesh",
    experienceDescription:
      "As a Software Engineer I at Brain Station 23, I actively contribute to the software development lifecycle by writing clean, maintainable code and delivering moderately complex features. I participate in daily standups and sprint planning, and take ownership of end-to-end module development. My responsibilities include debugging issues, conducting unit testing, and collaborating closely with team members through code reviews, pair programming, and knowledge sharing. I continuously learn and apply modern development tools and AI to enhance productivity while adhering to established coding standards and project architecture.",
  },
  {
    experienceField: "Interactive Cares | Brand Representative",
    experienceTimeline: "Mar 2024 - Present | Dhaka, Bangladesh",
    experienceDescription:
      "As a Brand Representative for Interactive Cares, I actively promoted the organization's mission and values across various events and platforms. I successfully facilitated the admission of numerous students into a range of programs conducted by Interactive Cares, contributing to increased participation and expanding the organization's outreach. This role allowed me to enhance my communication and marketing skills while making a meaningful impact in the education and professional development sector.",
  },
  {
    experienceField: "Google | Interview in Google",
    experienceTimeline: "10 July 2024",
    experienceDescription:
      "I recently had the opportunity to interview with Google, where the focus was primarily on data structures and algorithms, particularly graph and tree-related problems. During the interview, I discussed and solved 4 out of the 11 problems presented. It was a challenging yet enriching experience that tested my problem-solving skills and deepened my understanding of advanced DSA concepts.",
  },
  {
    experienceField: "Microsoft | Interview in Microsoft",
    experienceTimeline: "21 Sep 2023",
    experienceDescription:
      "I recently interviewed with Microsoft and scored 65%. The interview focused on GPT, a groundbreaking technology in NLP that powers ChatGPT and has transformed how we interact with and understand language.",
  },
  {
    experienceField: "Eastern University | Programming Instructor",
    experienceTimeline: "Mar 2023 - May 2023 | Dhaka, Bangladesh",
    experienceDescription:
      "Seasonal Programming Instructor arranged by EUCC (Eastern University Computing Club)",
  },
  {
    experienceField: "Sumach Tech | Sales Manager",
    experienceTimeline:
      "Feb 2019 - Nov 2019 | Bashundhara City Shopping Mall, Dhaka, Bangladesh",
    experienceDescription:
      "During my time as a Sales Manager at Sumash Tech, I worked extensively with mobile phones, laptops, and PCs. This hands-on experience sparked my curiosity about how computers functioned beyond their surface-level capabilities. Intrigued by the technical aspects, I began exploring the world of computing, which ultimately led me to pursue a career in Computer Science and Engineering (CSE). This role played a pivotal part in igniting my passion for technology and shaping my decision to delve into the field of CSE, setting the foundation for my journey as a tech enthusiast and professional.",
  },
];

const Experiences = () => (
  <section className="experiences">
    <div className="experiences-title-wrapper">
      <div className="icon-box">
        <ion-icon name="briefcase-outline"></ion-icon>
      </div>
      <h3 className="h3">Experience</h3>
    </div>

    <ol className="experiences-list">
      {experiencesSection.map((experience, index) => (
        <li key={index} className="experiences-item">
          <h4 className="h4 experiences-item-title">
            {experience.experienceField}
          </h4>
          <span>{experience.experienceTimeline}</span>
          <p className="experiences-item-text">{experience.experienceDescription}</p>
        </li>
      ))}
    </ol>
  </section>
);

export default Experiences;
