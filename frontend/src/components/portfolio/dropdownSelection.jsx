import React from "react";

const categories = [
  { name: "All" },
  { name: "Applications" },
  { name: "Web Development" },
  { name: "Others" },
];

const DropdownSelection = ({
  isDropdownOpen,
  onDropdownToggle,
  onCategoryChange,
}) => {
  return (
    <div className="filter-select-box">
      <button
        className={`filter-select ${isDropdownOpen ? "active" : ""}`}
        onClick={onDropdownToggle}
      >
        <div className="select-value">Select category</div>
        <div className="select-icon">
          <ion-icon name="chevron-down"></ion-icon>
        </div>
      </button>
      <ul className="select-list">
        {categories.map((category, index) => (
          <li key={index} className="select-item">
            <button onClick={() => onCategoryChange(category.name)}>
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownSelection;
