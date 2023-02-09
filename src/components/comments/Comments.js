import { useState } from "react";

import Comment from "./Comment/Comment";
import { createComment as createCommentApi } from "../../assets/data/comments";

import { useDataContext } from "../context";

const Comments = ({ currentUserId, setWriteReview }) => {
  const { comments, setComments } = useDataContext();
  const [activeComment, setActiveComment] = useState(null);
  const rootComments = comments.filter((comment) => comment.parentId === null);
  const getReplies = (commentId) =>
    comments
      .filter((comment) => comment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  const addComment = (text, parentId) => {
    createCommentApi(text, parentId).then((comment) => {
      setComments([comment, ...comments]);
      setActiveComment(null);
    });
  };

  return (
    <>
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
    </>
  );
};

export default Comments;
