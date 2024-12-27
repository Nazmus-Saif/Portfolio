import React from "react";

const serviceDetails = [
  {
    icon: "./images/web-development.png",
    alt: "Web Development",
    title: "Web Development",
    description: "High quality development of websites focused on performance and UI/UX.",
  },
  {
    icon: "./images/web-design.png",
    alt: "Web Design",
    title: "Web Design",
    description: "Modern, high quality design emphasizing creativity, functionality, and UI/UX.",
  },
  {
    icon: "./images/machine-learning.png",
    alt: "Machine Learning",
    title: "Machine Learning",
    description:
      "Applying Machine Learning techniques to drive into innovation and advancement.",
  },
  {
    icon: "./images/natural-language-processing.png",
    alt: "NLP",
    title: "Natural language Processing",
    description:
      "The power of language understanding and processing to create intelligent solutions.",
  },
];

const ServicesSection = () => {
  return (
    <section className="services">
      <h3 className="h3 services-title">My Expertise</h3>
      <ul className="services-list">
        {serviceDetails.map((service, index) => (
          <li key={index} className="services-list-item">
            <div className="services-icon-box">
              <img src={service.icon} alt={service.alt} width="40" />
            </div>
            <div className="services-content-box">
              <h4 className="h4 services-list-item-title">{service.title}</h4>
              <p className="services-list-item-text">{service.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ServicesSection;
