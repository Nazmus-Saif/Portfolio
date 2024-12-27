import React, { useState, useEffect } from "react";
import CategoryFilter from "./categoryFilter";
import DropdownSelection from "./dropdownSelection";
import PortfolioList from "./portfolioList";
import PortfolioDetails from "./portfolioDetails";

const portfolioProjects = [
  {
    id: 1,
    imageSrc: "./images/project-1.png",
    itemsCategory: "Applications",
    itemsTitle: "Sentiment Analysis Model",
    itemsDetails:
      "A machine learning based model which I build to detect the sentiment of a sentence. This model gives 97% accuracy.",
    dateTime: "10 Jan, 2024",
  },
  {
    id: 2,
    imageSrc: "./images/project-2.png",
    itemsCategory: "Applications",
    itemsTitle: "Intelligent Voice Assistant",
    itemsDetails:
      "This is an AI powered by ChatGPT API and nltk. This AI performs tasks like music playing, video playing, browsing, youtube searching, file creating, editing, deleting, copying, pasting, app opening, closing, etc. It is designed and built using Python.",
    dateTime: "12 Feb, 2024",
  },
  {
    id: 3,
    imageSrc: "./images/project-3.png",
    itemsCategory: "Web Development",
    itemsTitle: "Flex",
    itemsDetails:
      "Flex is a free movie streaming and downloading platform. Almost all kinds of movies are uploaded on this website. The searching, streaming, and downloading of movies is easier than on other platforms. This website is built using HTML, CSS, Javascript, PHP, and SQL.",
    dateTime: "15 Mar, 2024",
  },
  {
    id: 4,
    imageSrc: "./images/project-4.jpg",
    itemsCategory: "Others",
    itemsTitle: "Smart Home & Gardening",
    itemsDetails:
      "This is a hardware and coding-based project. It controls house staff like Light, Fan, Door, Window, TV, and Fridge via a mobile app, and can give water to plants when needed. This project is built using Arduino Uno R3.",
    dateTime: "20 Apr, 2024",
  },
];

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);

  useEffect(() => {
    if (isDetailsVisible || isDropdownOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [isDetailsVisible, isDropdownOpen]);

  const filterProjectsByCategory = (category) => {
    setSelectedCategory(category);
    if (isDropdownOpen) {
      closeCategoryDropdown();
    }
  };

  const toggleCategoryDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const closeCategoryDropdown = () => {
    setIsDropdownOpen(false);
  };

  const openProjectDetails = (index) => {
    setSelectedProjectIndex(index);
    setIsDetailsVisible(true);
  };

  const closeProjectDetails = () => {
    setIsDetailsVisible(false);
  };

  const filteredItems =
    selectedCategory === "All"
      ? portfolioProjects
      : portfolioProjects.filter(
          (item) => item.itemsCategory === selectedCategory
        );

  return (
    <article className="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      {/* Category filter section */}
      <section className="projects">
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={filterProjectsByCategory}
        />
        <DropdownSelection
          isDropdownOpen={isDropdownOpen}
          onDropdownToggle={toggleCategoryDropdown}
          onCategoryChange={filterProjectsByCategory}
        />

        {/* Portfolio list section*/}
        <PortfolioList
          filteredItems={filteredItems}
          onItemClick={openProjectDetails}
        />
      </section>

      {/* Portfolio details section*/}
      <PortfolioDetails
        isDetailsVisible={isDetailsVisible}
        selectedProjectIndex={selectedProjectIndex}
        filteredItems={filteredItems}
        onClose={closeProjectDetails}
      />
    </article>
  );
};

export default PortfolioPage;
