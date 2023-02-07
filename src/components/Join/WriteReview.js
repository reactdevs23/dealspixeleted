import React, { useState } from "react";

import Input from "../Input/Input";
import styles from "./styles.module.css";
const WriteReview = () => {
  const [values, setValues] = useState({
    email: "",

    yourquestion: "",
  });
  const [rating, setRating] = useState(null);
  const inputs = [
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
      <h3 className={`${styles.title} ${styles.heading}`}>Write Review</h3>
      <p className={`${styles.text} ${styles.tagline}`}>
        Find and share great deals
      </p>
      <form className={styles.form}>
        {inputs.map((el, i) => (
          <Input {...el} key={i} value={values[el.name]} onChange={onChange} />
        ))}
        <div className={styles.ratingWrapper}>
          <p className={styles.label}>Rating</p>
          <div className={styles.ratingContainer}>
            <span className={`${styles.label} ${styles.ratingText}`}>Bad</span>
            {[...new Array(5)].map((_, i) => (
              <p
                className={styles.circleContainer}
                key={i}
                onClick={() => setRating(i + 1)}
              >
                {i + 1 === rating && <span className={styles.circle}></span>}
              </p>
            ))}
            <span className={`${styles.label} ${styles.ratingText}`}>Good</span>
          </div>
        </div>
        <p htmlFor="" className={styles.label}>
          Your Review
        </p>
        <textarea
          name="yourquestion"
          id="textarea"
          className={styles.textarea}
          cols="30"
          rows="5"
          placeholder="Your Question"
        ></textarea>
        <button className={styles.button}>Submit</button>
        <button className={`${styles.button} ${styles.backButton}`}>
          Sign in
        </button>
      </form>
    </div>
  );
};

export default WriteReview;
