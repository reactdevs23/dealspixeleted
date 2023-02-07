import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TfiClose } from "react-icons/tfi";

import Input from "../Input/Input";
import styles from "./styles.module.css";
const AskQuestion = ({ setAskQuestion }) => {
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
      placeholder: "Enter your Name",
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
        <button className={styles.button}>Submit</button>
        <Link to="/signin" className={`${styles.button} ${styles.backButton}`}>
          Sign in
        </Link>
      </form>
    </div>
  );
};

export default AskQuestion;
