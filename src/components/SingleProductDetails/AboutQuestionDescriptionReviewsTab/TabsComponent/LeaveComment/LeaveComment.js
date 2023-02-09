import React, { useState} from "react";
import styles from "./styles.module.css";
import { MdAssignment } from "react-icons/md";
import WriteReview from "../../../../ModalAndSignUpSignIn/WriteReview";
import Modal from "../../../../Modal/Modal";
import { useDataContext } from "../../../../context";
import Comments from "../../../../comments/Comments";

const LeaveComment = () => {
  const [writeReview, setWriteReview] = useState(false);
  const { comments } = useDataContext();
  const rootComments = comments.filter((comment) => comment.parentId === null);

  return (
    <div className={styles.wrapper}>
      <div className={styles.questionAndAnswer}>
        <div className={styles.header}>
          <div>
            <h5 className={styles.heading}>Comments ({rootComments.length})</h5>
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
        {comments.length === 0 && (
          <div className={styles.messageBox}>
            <div className={styles.iconContainer}>
              <MdAssignment className={styles.icon} />
            </div>
            <p className={`${styles.text} ${styles.text2}`}>
              This product has no reviews yet. Be the first one to write a
              review.
            </p>
          </div>
        )}
        {comments.length !== 0 && (
          <Comments currentUserId="1" setWriteReview={setWriteReview} />
        )}
      </div>

      {writeReview && (
        <Modal setModal={setWriteReview}>
          <WriteReview setWriteReview={setWriteReview} />
        </Modal>
      )}
    </div>
  );
};

export default LeaveComment;
