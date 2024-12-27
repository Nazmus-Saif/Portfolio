import React from "react";

const researchFields = [
  {
    icon: "./images/machine-learning.png",
    alt: "Machine Learning",
    title: "Machine Learning",
  },
  {
    icon: "./images/deep-learning.png",
    alt: "Deep Learning",
    title: "Deep Learning",
  },
  {
    icon: "./images/natural-language-processing.png",
    alt: "NLP",
    title: "Natural language Processing",
  },
  {
    icon: "./images/data-science.png",
    alt: "Data Science",
    title: "Data Science",
  },
];

const ResearchInterests = () => {
  return (
    <section className="research-interests">
      <h3 className="h3 research-interest-title">Research Interests</h3>
      <ul className="research-interest-list">
        {researchFields.map((field, index) => (
          <li key={index} className="research-interest-list-item">
            <div className="research-interest-icon-box">
              <img src={field.icon} alt={field.alt} width="40" />
            </div>
            <div className="research-interest-content-box">
              <h4 className="h4 research-interest-list-item-title">{field.title}</h4>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ResearchInterests;
