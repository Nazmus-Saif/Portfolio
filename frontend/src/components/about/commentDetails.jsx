import React from "react";

const CommentDetails = ({
  isCommentActive,
  activeCommentId,
  comments,
  closeCommentDetails,
}) => {
  return (
    <div
      className={`comment-details-floating-container ${
        isCommentActive ? "active" : ""
      }`}
    >
      <div
        className={`comment-details-floating-div-overlay ${
          isCommentActive ? "active" : ""
        }`}
        onClick={closeCommentDetails}
      ></div>
      <section
        className={`comment-details-floating-div  ${
          isCommentActive ? "active" : ""
        }`}
      >
        <button
          className="comment-details-floating-div-close-btn"
          onClick={closeCommentDetails}
        >
          <ion-icon name="close-outline"></ion-icon>
        </button>
        <div className="comment-details-floating-div-img-wrapper">
          <figure className="comment-details-floating-div-avatar-box">
            <img
              src="./images/commenter-avatar.png"
              alt="Commenter"
              width="80"
            />
          </figure>
          <img src="./images/quote.svg" alt="Quote" />
        </div>
        <div className="comment-details-floating-div-content">
          <h4 className="h4 comment-details-floating-div-commenter-name">
            {activeCommentId !== null ? comments[activeCommentId]?.name : ""}
          </h4>
          <time>
            {activeCommentId !== null ? comments[activeCommentId]?.time : ""}
          </time>
          <div>
            <p>
              {activeCommentId !== null
                ? comments[activeCommentId]?.comment
                : ""}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommentDetails;
