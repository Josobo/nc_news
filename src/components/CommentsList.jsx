import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByArticleId } from "../api.js";

function CommentsList() {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCommentsByArticleId(article_id)
      .then((response) => {
        console.log(response.data);
        setComments(response.data.comments);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, [article_id]);

  if (isLoading) {
    return <p>Loading comments...</p>;
  }

  return (
    <>
      <h3>List of Comments</h3>

      {comments.length === 0 && <p>No comments yet</p>}

      <ul>
        {comments.map((comment) => (
          <li key={comment.comment_id}>
            <p>Author: {comment.author}</p>
            <p>comment: {comment.body}</p>
            <p>Votes: {comment.votes}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CommentsList;
