import React, { useState, useEffect } from "react";
import CommentList, { comments } from "./commentList";
import ResearchInterests from "./researchInterests";
import CommentForm from "./commentForm";
import CommentDetails from "./commentDetails";
import ServicesSection from "./servicesSection";

const AboutMePage = () => {
  const [isCommentActive, setIsCommentActive] = useState(false);
  const [activeCommentId, setActiveCommentId] = useState(null);
  const [isCommentFormActive, setIsCommentFormActive] = useState(false);

  // Lock scrolling when either container is active
  useEffect(() => {
    if (isCommentActive || isCommentFormActive) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [isCommentActive, isCommentFormActive]);

  const showCommentDetails = (index) => {
    setActiveCommentId(index); // Track the comment position
    setIsCommentActive(true);
  };

  const closeCommentDetails = () => {
    setIsCommentActive(false);
  };

  const toggleCommentFormVisibility = () => {
    setIsCommentFormActive(!isCommentFormActive);
  };

  const hideCommentForm = () => {
    setIsCommentFormActive(false);
  };

  return (
    <article className="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      {/* Intro section */}
      <section className="about-text">
        <p>
          Assalamu-Alaikum! I’m Nazmus Saif, a dedicated Software Engineer
          specializing in web development and machine learning. I hold a BSc in
          Computer Science and Engineering from Eastern University, where I
          built a strong foundation in programming, data structures, and
          algorithms.
        </p>
        <p>
          I’m passionate about transforming complex problems into user-friendly,
          functional solutions. My expertise lies in developing dynamic,
          responsive web applications that prioritize functionality and user
          experience. I focus on creating designs that are not only visually
          appealing but also intuitive and easy to navigate.
        </p>
        <p>
          I’m always looking to expand my skill set and stay up-to-date with the
          latest industry trends. Whether it’s learning about cutting-edge
          technologies like artificial intelligence or contributing to
          open-source projects, I thrive on continuous learning and innovation.
        </p>
      </section>

      {/* Career goals */}
      <section className="career-goals">
        <h3 className="h3 career-goals-title">Career Goals</h3>
        <div className="career-goal-box">
          <p className="career-goal-text">
            I am committed to mastering artificial intelligence, with a
            particular focus on machine learning, deep learning, and natural
            language processing (NLP). At present, I am concentrating on
            advanced sentiment analysis and working towards building large
            language models, with the goal of developing innovative AI driven
            solutions that make a significant impact.
          </p>
        </div>
      </section>

      {/* Services section */}
      <ServicesSection />

      {/* Research interest section */}
      <ResearchInterests />

      {/* Comments section */}
      <CommentList
        comments={comments}
        showCommentDetails={showCommentDetails}
      />

      {/* Add comment button */}
      <div className="add-new-comment">
        <button
          className="add-new-comment-button"
          onClick={toggleCommentFormVisibility}
        >
          Add Comment
        </button>
      </div>

      {/* Comment details floating div */}
      <CommentDetails
        isCommentActive={isCommentActive}
        activeCommentId={activeCommentId}
        comments={comments}
        closeCommentDetails={closeCommentDetails}
      />

      {/* Add comment floating form */}
      <CommentForm
        isCommentFormActive={isCommentFormActive}
        hideCommentForm={hideCommentForm}
      />
    </article>
  );
};

export default AboutMePage;
