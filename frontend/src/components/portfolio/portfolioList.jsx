import React from "react";

const PortfolioList = ({ filteredItems, onItemClick }) => {
  return (
    <ul className="project-list">
      {filteredItems.map((item) => (
        <li
          key={item.id}
          className="project-item active"
          onClick={() =>
            onItemClick(filteredItems.findIndex((i) => i.id === item.id))
          }
        >
          <div>
            <figure className="project-img">
              <div className="project-item-icon-box">
                <ion-icon name="eye-outline"></ion-icon>
              </div>
              <img src={item.imageSrc} alt={item.itemsTitle} loading="lazy" />
            </figure>
            <h3 className="project-title">{item.itemsTitle}</h3>
            <p className="project-category">{item.itemsCategory}</p>
            <div className="portfolio-details-text">
              <p>{item.itemsDetails}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PortfolioList;
