import React, { useState } from "react";
import styles from "./styles.module.css";
import { MdAssignment } from "react-icons/md";
import WriteReview from "../../../../Join/WriteReview";
import Modal from "../../../../Modal/Modal";

const Comment = () => {
  const [writeReview, setWriteReview] = useState(false);
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
              onClick={() => setWriteReview(true)}
            >
              Leave a Comment
            </button>
          </div>
        </div>
        <div className={styles.messageBox}>
          <div className={styles.iconContainer}>
            <MdAssignment className={styles.icon} />
          </div>
          <p className={`${styles.text} ${styles.text2}`}>
            This product has no reviews yet. Be the first one to write a review.
          </p>
        </div>
      </div>
      {writeReview && (
        <Modal setModal={setWriteReview}>
          <WriteReview setWriteReview={setWriteReview} />
        </Modal>
      )}
    </div>
  );
};

export default Comment;
