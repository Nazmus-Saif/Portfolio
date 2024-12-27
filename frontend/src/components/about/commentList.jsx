import React, { useState, useEffect } from "react";
import axios from "axios";
import { formatDistanceToNow } from "date-fns";

export let comments = [];

const CommentList = ({ showCommentDetails }) => {
  const [commentData, setCommentData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/get-comments`
        );

        // Check if response data is an array and has data
        if (Array.isArray(response.data) && response.data.length > 0) {
          // Map the fetched data into the desired structure and set the state
          const fetchedComments = response.data.map((comment, index) => ({
            id: index + 1,
            name: comment.name,
            comment: comment.comment,
            time: formatDistanceToNow(new Date(comment.createdAt), {
              addSuffix: true,
            }),
          }));
          setCommentData(fetchedComments);
          comments = fetchedComments;
        } else {
          setCommentData([]); // Set empty array if no comments
        }
      } catch (error) {
        setError("Error fetching comments.");
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchComments();
  }, []);

  return (
    <section className="comments">
      <h3 className="h3 comments-title">Comments</h3>
      {loading ? (
        <p className="loading-comments">Loading comments...</p>
      ) : error ? (
        <p className="error-fetching-comments">{error}</p>
      ) : commentData.length > 0 ? (
        <ul className="comments-list has-scrollbar">
          {[...commentData].reverse().map((comment) => (
            <li
              key={comment.id}
              className="comment-list-item active"
              onClick={() =>
                showCommentDetails(
                  commentData.findIndex((c) => c.id === comment.id)
                )
              }
            >
              <div className="content-card">
                <figure className="comment-avatar-container">
                  <img
                    src="./images/commenter-avatar.png"
                    alt="commenter-avatar"
                    width="60"
                  />
                </figure>
                <h4 className="h4 commenter-name">{comment.name}</h4>
                <time className="comment-time">{comment.time}</time>
                <div className="comment-content">
                  <p>{comment.comment}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-comment-found">No comments found.</p>
      )}
    </section>
  );
};

export default CommentList;
