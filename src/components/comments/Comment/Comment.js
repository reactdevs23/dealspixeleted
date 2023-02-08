import Reply from "../Reply/Reply";
import { user1 } from "../../../assets/images/images";

import { TimeFormation } from "../../../assets/data/comments";
import { AiTwotoneLike } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import styles from "./style.module.css";

const Comment = ({
  comment,
  replies,
  setActiveComment,
  activeComment,
  updateComment,
  deleteComment,
  addComment,
  parentId = null,
  currentUserId,
}) => {
  const isReplying =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "replying";

  const canReply = Boolean(currentUserId);

  const replyId = parentId ? parentId : comment.id;
  // const createdAt = new Date(comment.createdAt).toLocaleDateString();
  return (
    <div
      key={comment.id}
      className={`${styles.comment} ${parentId == null && styles.border}`}
    >
      <div
        className={`${styles.commentImageContainer} ${
          !parentId === null && styles.replyUser
        }`}
      >
        <img src={comment.user ? comment.user : user1} alt="#" />
      </div>
      <div className={styles.commentRightPart}>
        <div className={styles.commentContent}>
          <h2 className={styles.commentAuthor}>{comment.username}</h2>
          <div className={styles.createdAndOtherText}>
            <span className={styles.text}>
              {" "}
              {TimeFormation(comment.createdAt)}
            </span>
            {parentId === null && (
              <>
                <span className={styles.text}>Joined {comment.joinAt}</span>
                <span className={styles.text}>L4: {comment.position}</span>
                <span className={styles.text}>{comment.posts} Posts</span>
                <span className={styles.text}>
                  {comment.reputation} Reputation
                </span>
              </>
            )}
          </div>
        </div>
        <p className={styles.commentText}>{comment.body}</p>
        <div className={styles.likeBox}>
          <div className={styles.likeContainer}>
            <AiTwotoneLike className={styles.like} />
          </div>
          <span className={styles.likeNumber}>{comment.like}</span>
        </div>
        {canReply && (
          <div className={styles.commentAction}>
            <button className={styles.actionBox}>
              <AiTwotoneLike className={styles.actionText} />
              <span className={styles.actionText}>Like</span>
            </button>
            <button
              className={styles.actionBox}
              onClick={() =>
                setActiveComment({ id: comment.id, type: "replying" })
              }
            >
              <BiMessageDetail
                className={`${styles.actionText} ${styles.replyIcon}`}
              />
              <span className={styles.actionText}>Reply</span>
            </button>
          </div>
        )}
        {isReplying && (
          <Reply
            submitLabel="Reply"
            handleSubmit={(text) => addComment(text, replyId)}
          />
        )}
        {replies.length > 0 && (
          <div className={styles.replies}>
            {replies.map((reply) => (
              <Comment
                comment={reply}
                key={reply.id}
                setActiveComment={setActiveComment}
                activeComment={activeComment}
                updateComment={updateComment}
                deleteComment={deleteComment}
                addComment={addComment}
                parentId={comment.id}
                replies={[]}
                currentUserId={currentUserId}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
