import React from "react";

const skillsSection = [
  {
    skillsGenre: "Programming Languages",
    skillsItems: "Python, C++, SQL, PHP, JavaScript",
  },
  {
    skillsGenre: "Web Development",
    skillsItems:
      "HTML, CSS, JavaScript, Bootstrap, jQuery, React.js, EJS, Express.js, REST APIs",
  },
  {
    skillsGenre: "Database Management",
    skillsItems: "MySQL, MongoDB, Firebase",
  },
  {
    skillsGenre: "Machine Learning",
    skillsItems:
      "Supervised Learning, Neural Networks, NLP, Deep Learning, LLMs",
  },
  {
    skillsGenre: "Machine Learning Frameworks & Libraries",
    skillsItems:
      "TensorFlow, Keras, Scikit-Learn, Pandas, NumPy, Matplotlib, NLTK, Seaborn",
  },
  {
    skillsGenre: "Tools",
    skillsItems: "Git/GitHub, Visual Studio Code, Google Colab",
  },
  {
    skillsGenre: "Others",
    skillsItems: "Figma (UI/UX design), Selenium (automation testing)",
  },
  {
    skillsGenre: "Research Interests",
    skillsItems: "Machine Learning, Data Science, NLP, Deep Learning, LLMs",
  },
];

const Skills = () => (
  <section className="skills">
    <h3 className="h3 skills-title">Skills</h3>
    <ul className="skills-list content-card">
      {skillsSection.map((skill, index) => (
        <li key={index} className="skills-item">
          <div className="skills-item-title-wrapper">
            <h5 className="h5">{skill.skillsGenre}</h5>
            <p className="skills-item-text">{skill.skillsItems}</p>
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export default Skills;
