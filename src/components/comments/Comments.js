import { useState, useEffect } from "react";

import Comment from "./Comment/Comment";
import {
  getComments as getCommentsApi,
  createComment as createCommentApi,
} from "../../assets/data/comments";
import styles from "./styles.module.css";

const Comments = ({ currentUserId, setWriteReview }) => {
  const [backendComments, setBackendComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);
  const rootComments = backendComments.filter(
    (backendComment) => backendComment.parentId === null
  );
  const getReplies = (commentId) =>
    backendComments
      .filter((backendComment) => backendComment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  const addComment = (text, parentId) => {
    createCommentApi(text, parentId).then((comment) => {
      setBackendComments([comment, ...backendComments]);
      setActiveComment(null);
    });
  };

  useEffect(() => {
    getCommentsApi().then((data) => {
      setBackendComments(data);
    });
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.questionAndAnswer}>
        <div className={styles.header}>
          <div>
            <h5 className={styles.heading}>Comments (0)</h5>
            <p className={styles.text}>
              Have question about this product? Get specific details about this
              product from expert.
            </p>
          </div>
          <div className={styles.buttonContainer}>
            <button
              className={styles.button}
              onClick={(e) => {
                e.preventDefault();
                setWriteReview(true);
              }}
            >
              Leave a Comment
            </button>
          </div>
        </div>
        <div className={styles.comments}>
          {/* <CommentForm submitLabel="Write" handleSubmit={addComment} /> */}
          <div className={styles.commentsContainer}>
            {rootComments.map((rootComment) => (
              <Comment
                key={rootComment.id}
                comment={rootComment}
                replies={getReplies(rootComment.id)}
                activeComment={activeComment}
                setActiveComment={setActiveComment}
                addComment={addComment}
                currentUserId={currentUserId}
              />
            ))}
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Comments;
