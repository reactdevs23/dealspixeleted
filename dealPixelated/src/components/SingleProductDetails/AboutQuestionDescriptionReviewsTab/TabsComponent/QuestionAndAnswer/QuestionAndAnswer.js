import React, { useState } from "react";
import { RiMessage2Fill } from "react-icons/ri";
import { useDataContext } from "../../../../context";
import AskQuestion from "../../../../ModalAndSignUpSignIn/AskQuestion";
import Modal from "../../../../Modal/Modal";
import styles from "./styles.module.css";

const QuestionAndAnswer = () => {
  const [askQuestion, setAskQuestion] = useState(false);
  const { question, submitQuestion } = useDataContext();
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
      {submitQuestion && (
        <div className={styles.questionAndAnswer}>
          <div className={styles.header}>
            <div>
              <h5 className={styles.heading}>Questions (1)</h5>
              <p className={styles.text}>
                Have question about this product? Get specific details about
                this product from expert.
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

          {question.map((el, i) => (
            <div className={styles.answerBox} key={i}>
              <p className={styles.dateAndName}>
                {" "}
                <span className={styles.name}>{el.name}</span> on {el.date}
              </p>
              <p className={styles.question}>
                <span className={styles.ques}>Q:</span>
                <span>{el.question}</span>
              </p>
              <p className={styles.answer}>
                <span className={styles.ques}>A:</span>
                <span>{el.answer}</span>
              </p>
            </div>
          ))}
        </div>
      )}
      {askQuestion && (
        <Modal setModal={setAskQuestion}>
          <AskQuestion setAskQuestion={setAskQuestion} />
        </Modal>
      )}
    </div>
  );
};

export default QuestionAndAnswer;
