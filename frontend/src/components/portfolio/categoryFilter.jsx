import React from "react";

const categories = [
  { name: "All" },
  { name: "Applications" },
  { name: "Web Development" },
  { name: "Publications" },
  { name: "Others" },
];

const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  return (
    <ul className="filter-list">
      {categories.map((category, index) => (
        <li key={index} className="filter-item">
          <button
            className={selectedCategory === category.name ? "active" : ""}
            onClick={() => onCategoryChange(category.name)}
          >
            {category.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CategoryFilter;
