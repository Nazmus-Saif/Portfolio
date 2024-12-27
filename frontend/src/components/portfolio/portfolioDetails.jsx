import React from "react";

const PortfolioDetails = ({
  isDetailsVisible,
  selectedProjectIndex,
  filteredItems,
  onClose,
}) => {
  return (
    <div
      className={`portfolio-details-floating-container ${
        isDetailsVisible ? "active" : ""
      }`}
    >
      <div
        className={`portfolio-details-floating-div-overlay ${
          isDetailsVisible ? "active" : ""
        }`}
        onClick={onClose}
      ></div>
      <section
        className={`portfolio-details-floating-div ${
          isDetailsVisible ? "active" : ""
        }`}
      >
        <button
          className="portfolio-details-floating-div-close-btn"
          onClick={onClose}
        >
          <ion-icon name="close-outline"></ion-icon>
        </button>
        <div className="portfolio-details-floating-div-content">
          <h4 className="h4 portfolio-details-floating-div-title">
            {selectedProjectIndex !== null
              ? filteredItems[selectedProjectIndex]?.itemsTitle
              : ""}
          </h4>
          <time>
            {selectedProjectIndex !== null
              ? filteredItems[selectedProjectIndex]?.dateTime
              : ""}
          </time>
          <p>
            {selectedProjectIndex !== null
              ? filteredItems[selectedProjectIndex]?.itemsDetails
              : ""}
          </p>
        </div>
      </section>
    </div>
  );
};

export default PortfolioDetails;
