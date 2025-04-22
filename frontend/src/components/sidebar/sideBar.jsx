import React, { useState } from "react";

const contactDetails = [
  {
    icon: "mail-outline",
    label: "Email",
    link: "mailto:nzsaif10@gmail.com",
    text: "nzsaif10@gmail.com",
  },
  {
    icon: "phone-portrait-outline",
    label: "Phone",
    link: "tel:+8801758871858",
    text: "+880 1758-871858",
  },
  {
    icon: "calendar-outline",
    label: "Birthday",
    link: null,
    text: "20 December, 1999",
  },
  {
    icon: "location-outline",
    label: "Location",
    link: null,
    text: "B-Baria, Bangladesh",
  },
];

const socialLinks = [
  {
    href: "https://www.leetcode.com/u/Nazmus_Saif/",
    imgSrc: "./images/leetcode.svg",
    alt: "LeetCode",
    icon: null,
  },
  {
    href: "https://codeforces.com/profile/NSaif",
    imgSrc: "./images/codeforces.svg",
    alt: "Codeforces",
    icon: null,
  },
  {
    href: "https://vjudge.net/user/NSaif",
    imgSrc: "./images/vjudge.png",
    alt: "VJudge",
    icon: null,
  },
  {
    href: "https://www.hackerrank.com/nazmussaif_cse",
    imgSrc: "./images/hackerrank.svg",
    alt: "HackerRank",
    icon: null,
  },
  {
    href: "https://www.github.com/Nazmus-Saif",
    imgSrc: null,
    alt: "GitHub",
    icon: "logo-github",
  },
  {
    href: "https://www.linkedin.com/in/nzsaif",
    imgSrc: null,
    alt: "Linkedin",
    icon: "logo-linkedin",
  },
  {
    href: "https://www.facebook.com/profile.php?id=100080676383719",
    imgSrc: null,
    alt: "Facebook",
    icon: "logo-facebook",
  },
];

const SideBar = () => {
  const [isContactsVisible, setIsContactsVisible] = useState(false);

  const handleToggleContactsVisibility = () => {
    setIsContactsVisible((prevState) => !prevState); // Toggle the current state
  };

  return (
    <aside className={`sidebar ${isContactsVisible ? "active" : ""}`}>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src="./images/my-avatar.png" alt="Nazmus Saif" width="80" />
        </figure>
        <div className="info-content">
          <h1 className="name" title="Nazmus Saif">
            Nazmus Saif
          </h1>
        <p className="title">
          Software Engineer I<br />
          @ BrainStation 23
        </p>
        </div>
        <button
          className="info-more-btn"
          onClick={handleToggleContactsVisibility}
        >
          <span>Show Contacts</span>
          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>

      {/* Contact informations */}
      <div className="sidebar-info-more">
        <div className="separator"></div>
        <ul className="contact-details-list">
          {contactDetails.map((contact, index) => (
            <li key={index} className="contact-item">
              <div className="icon-box">
                <ion-icon name={contact.icon}></ion-icon>
              </div>
              <div className="contact-details">
                <p className="contact-label">{contact.label}</p>
                {contact.link ? (
                  <a href={contact.link} className="contact-link">
                    {contact.text}
                  </a>
                ) : (
                  <time>{contact.text}</time>
                )}
              </div>
            </li>
          ))}
        </ul>

        <div className="separator"></div>

        {/* Social icons */}
        <ul className="social-link-list">
          {socialLinks.map((link, index) => (
            <li key={index} className="social-item">
              <a
                href={link.href}
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.imgSrc ? (
                  <img
                    src={link.imgSrc}
                    alt={link.alt}
                    style={{ width: "18px", height: "18px" }}
                  />
                ) : (
                  <ion-icon name={link.icon}></ion-icon>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
