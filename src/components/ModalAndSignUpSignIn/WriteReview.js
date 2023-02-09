import React, { useState } from "react";
import { TfiClose } from "react-icons/tfi";

import { useDataContext } from "../context";
import { user1, user2, user3, user4 } from "../../assets/images/images";
import Input from "../Input/Input";
import styles from "./styles.module.css";
const WriteReview = ({ setWriteReview }) => {
  const { setComments } = useDataContext();
  const [values, setValues] = useState({
    email: "",

    yourquestion: "",
  });
  const [rating, setRating] = useState(null);
  const inputs = [
    {
      label: "Your E-mail",
      type: "email",
      name: "email",
      placeholder: "Enter your email",
    },
  ];
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const addingComments = () => {
    setComments([
      {
        id: "1",
        user: user1,
        body: "If we consider the price then Lorem Ipsum is simply dummy text of the printing Overall nice! Thanks",
        username: "Esther Howard",
        userId: "1",
        parentId: null,
        createdAt: "2021-08-16T23:00:33.010+02:00",
        joinAt: "Nov 2018",
        like: 22,
        position: " Apprentice ",
        posts: 384,
        reputation: 50,
      },
      {
        id: "2",
        user: user4,
        body: "If we consider the price then Lorem Ipsum is simply dummy text of the printing Overall nice! Thanks",
        username: "Marvin McKinney",
        userId: "2",
        parentId: null,
        createdAt: "2021-08-16T23:00:33.010+02:00",
        joinAt: "Jan 2018",
        like: 22,
        position: " Apprentice ",
        posts: 384,
        reputation: 60,
      },
      {
        id: "3",
        user: user2,
        body: "If we consider the price then Lorem Ipsum is simply dummy text of the printing Overall nice! Thanks",
        username: "Robert Fox",
        userId: "2",
        parentId: "1",
        createdAt: "2021-08-16T23:00:33.010+02:00",
        joinAt: "Feb 2023",
        like: 22,
      },
      {
        id: "4",
        user: user3,
        body: "If we consider the price then Lorem Ipsum is simply dummy text of the printing Overall nice! Thanks",
        username: "Cameron Williamson",
        userId: "2",
        parentId: "1",
        createdAt: "2021-08-16T23:00:33.010+02:00",
        joinAt: "Jan 2018",
        like: 22,
      },
    ]);
  };

  return (
    <div className={styles.wrapper}>
      <TfiClose
        className={styles.close}
        onClick={() => setWriteReview(false)}
      />
      <h3 className={`${styles.title} ${styles.heading}`}>Write Review</h3>
      <p className={`${styles.text} ${styles.tagline}`}>
        Find and share great deals
      </p>
      <form className={styles.form}>
        {inputs.map((el, i) => (
          <Input {...el} key={i} value={values[el.name]} onChange={onChange} />
        ))}
        <div className={styles.ratingWrapper}>
          <label className={styles.label}>Rating</label>
          <div className={styles.ratingContainer}>
            <span className={`${styles.label} ${styles.ratingText}`}>Bad</span>
            {[...new Array(5)].map((_, i) => (
              <div
                className={styles.circleContainer}
                key={i}
                onClick={() => setRating(i + 1)}
              >
                <span className={i + 1 === rating ? styles.circle : ""}></span>
              </div>
            ))}
            <span className={`${styles.label} ${styles.ratingText}`}>Good</span>
          </div>
        </div>
        <p className={styles.label}>Your Review</p>
        <textarea
          name="yourquestion"
          id="textarea"
          className={styles.textarea}
          cols="30"
          rows="5"
          placeholder="Your Question"
        ></textarea>
        <button
          className={styles.button}
          onClick={(e) => {
            e.preventDefault();
            addingComments();
            setWriteReview(false);
          }}
        >
          Submit
        </button>
        <div
          className={`${styles.button} ${styles.backButton}`}
          onClick={() => setWriteReview(false)}
        >
          Back
        </div>
      </form>
    </div>
  );
};

export default WriteReview;
