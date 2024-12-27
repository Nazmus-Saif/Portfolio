import React, { useState } from "react";
import axios from "axios";

const CommentForm = ({ isCommentFormActive, hideCommentForm }) => {
  const [commentData, setCommentData] = useState({
    name: "",
    comment: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCommentData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send the comment data to the backend
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/submit-comment`,
        commentData
      );

      // Clear the form fields
      setCommentData({
        name: "",
        comment: "",
      });

      window.location.reload();
    } catch (error) {
      console.error("Failed to submit comment:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`comment-form-floating-container ${
        isCommentFormActive ? "active" : ""
      }`}
    >
      <div
        className={`comment-form-floating-div-overlay ${
          isCommentFormActive ? "active" : ""
        }`}
        onClick={hideCommentForm}
      ></div>
      <section className="comment-form-floating-div">
        <button className="comment-form-close-btn" onClick={hideCommentForm}>
          <ion-icon name="close-outline"></ion-icon>
        </button>
        <form
          id="comment-form"
          className="comment-form"
          onSubmit={handleFormSubmit}
        >
          <input
            type="text"
            name="name"
            className="input-field"
            placeholder="Your Name"
            value={commentData.name}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="comment"
            className="input-field"
            placeholder="Your Comment"
            value={commentData.comment}
            onChange={handleInputChange}
            required
          ></textarea>
          <button
            className="submit-comment-button"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <ion-icon name="hourglass-outline"></ion-icon>
            ) : (
              <ion-icon name="send-outline"></ion-icon>
            )}
          </button>
        </form>
      </section>
    </div>
  );
};

export default CommentForm;
