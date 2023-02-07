import React, { useState } from "react";
import { RiMessage2Fill } from "react-icons/ri";
import { useDataContext } from "../../../../context";
import AskQuestion from "../../../../Join/AskQuestion";
import Modal from "../../../../Modal/Modal";
import styles from "./styles.module.css";

const QuestionAndAnswer = () => {
  const [askQuestion, setAskQuestion] = useState(false);
  return (
    <div className={styles.wrapper}>
      <div className={styles.questionAndAnswer}>
        <div className={styles.header}>
          <div>
            <h5 className={styles.heading}>Questions (0)</h5>
            <p className={styles.text}>
              Have question about this product? Get specific details about this
              product from expert.
            </p>
          </div>
          <div className={styles.buttonContainer}>
            {" "}
            <button
              className={styles.button}
              onClick={() => setAskQuestion((prev) => !prev)}
            >
              Ask Question
            </button>
          </div>
        </div>
        <div className={styles.messageBox}>
          <div className={styles.iconContainer}>
            <RiMessage2Fill className={styles.icon} />
          </div>
          <p className={`${styles.text} ${styles.text2}`}>
            There are no questions asked yet. Be the first one to ask a
            question.
          </p>
        </div>
      </div>
      <div className={styles.questionAndAnswer}>
        <div className={styles.header}>
          <div>
            <h5 className={styles.heading}>Questions (1)</h5>
            <p className={styles.text}>
              Have question about this product? Get specific details about this
              product from expert.
            </p>
          </div>
          <div className={styles.buttonContainer}>
            {" "}
            <button
              className={styles.button}
              onClick={() => setAskQuestion((prev) => !prev)}
            >
              Ask Question
            </button>
          </div>
        </div>
        <div className={styles.answerBox}>
          <p className={styles.dateAndName}>
            {" "}
            <span className={styles.name}>Lima Islam</span> on 06 Aug 2021
          </p>
          <p className={styles.question}>
            <span className={styles.ques}>Q:</span>
            <span>Is there any Lorem ipsum available?</span>
          </p>
          <p className={styles.answer}>
            <span className={styles.ques}>A:</span>
            <span>
              Yes sir, Lorem Ipsum-H2105D Lorem Ipsum is simply dummy text
            </span>
          </p>
        </div>
      </div>
      {askQuestion && (
        <Modal setModal={setAskQuestion}>
          <AskQuestion setAskQuestion={setAskQuestion} />
        </Modal>
      )}
    </div>
  );
};

export default QuestionAndAnswer;
