import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  useLocation,
  Navigate,
} from "react-router-dom";
import Sidebar from "./components/sidebar/sideBar";
import AboutMePage from "./components/about/aboutMePage";
import ResumePage from "./components/resume/resumePage";
import PortfolioPage from "./components/portfolio/portfolioPage";
import BlogPage from "./components/blog/blogPage";
import ContactPage from "./components/contact/contactPage";
import ErrorPage from "./components/error/errorPage.jsx";
import "./styles/style.css";

function App() {
  const location = useLocation();
  const [activePage, setActivePage] = useState("about");

  // Update activePage based on current location
  useEffect(() => {
    const currentPath = location.pathname.replace("/", "") || "about";
    setActivePage(currentPath);
  }, [location]);

  const navbarItems = [
    { name: "About", path: "/about" },
    { name: "Resume", path: "/resume" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <main>
      <Sidebar />

      <div className="main-content">
        <nav className="navbar">
          <ul className="navbar-list">
            {navbarItems.map((item) => (
              <li className="navbar-item" key={item.name}>
                <NavLink
                  to={item.path}
                  className={`navbar-link ${
                    activePage === item.name.toLowerCase() ? "active" : ""
                  }`}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
            <li className="navbar-item">
              <button className="navbar-link" id="theme-button">
                <img
                  src="./images/theme.png"
                  alt="Theme Button"
                  className="rotating-image"
                />
              </button>
            </li>
          </ul>
        </nav>

        <Routes>
          {/* Redirect `/about` to `/` */}
          <Route path="/about" element={<Navigate to="/" />} />
          <Route path="/" element={<AboutMePage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </div>
    </main>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;
