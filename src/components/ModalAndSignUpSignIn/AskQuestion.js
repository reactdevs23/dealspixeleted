import React, { useState } from "react";

import { TfiClose } from "react-icons/tfi";

import Input from "../Input/Input";
import styles from "./styles.module.css";
import { useDataContext } from "../context";
const AskQuestion = ({ setAskQuestion }) => {
  const { setQuestion } = useDataContext();
  const [values, setValues] = useState({
    product: "",
    email: "",
    yourquestion: "",
  });

  const inputs = [
    {
      label: "Product",
      type: "text",
      name: "product",
      placeholder: "Enter Product Name",
    },
    {
      label: "Your E-mail*",
      type: "email",
      name: "email",
      placeholder: "Enter your email",
    },
  ];
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const addingQuestion = () => {
    setQuestion([
      {
        name: "Lima Islam   ",
        date: "06 Aug 2021",
        question: "is there any Lorem ipsum available?",
        answer: "Yes sir, Lorem Ipsum-H2105D Lorem Ipsum is simply dummy text",
      },
    ]);
  };
  return (
    <div className={styles.wrapper}>
      <TfiClose
        className={styles.close}
        onClick={() => setAskQuestion(false)}
      />
      <h3 className={`${styles.title} ${styles.heading}`}>Ask Question</h3>
      <p className={`${styles.text} ${styles.tagline}`}>
        Find and share great deals
      </p>
      <form className={styles.form}>
        {inputs.map((el, i) => (
          <Input {...el} key={i} value={values[el.name]} onChange={onChange} />
        ))}

        <div className={styles.labelAndTextArea}>
          <label htmlFor="textarea" className={styles.label}>
            Your Question
          </label>
          <textarea
            name="yourquestion"
            id="textarea"
            className={styles.textarea}
            cols="30"
            rows="5"
            placeholder="Your Question"
          ></textarea>
        </div>
        <button
          className={styles.button}
          onClick={(e) => {
            e.preventDefault();
            addingQuestion();

            setAskQuestion(false);
          }}
        >
          Submit
        </button>
        <div
          className={`${styles.button} ${styles.backButton}`}
          onClick={() => setAskQuestion(false)}
        >
          Back
        </div>
      </form>
    </div>
  );
};

export default AskQuestion;
