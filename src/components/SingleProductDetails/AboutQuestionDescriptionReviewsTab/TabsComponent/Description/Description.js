import React from "react";
import styles from "./styles.module.css";

const Desctiption = () => {
  const features = [
    "Lorem Ipsum is simply dummy text of the printing and typesetting",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "Lorem Ipsum is simply dummy text of the printing ",
    "Lorem Ipsum is simply dummy text of the printing It was popularized in the 1960s ",
  ];
  return (
    <section className={styles.projectDescription}>
      <h4 className={styles.title}>Description</h4>
      <p className={styles.tagline}>
        DANCELF Christmas Laser Lighted Gift Boxes
      </p>
      <p className={styles.tagline}>Features</p>
      <div className={styles.features}>
        {features.map((el, i) => (
          <li className={styles.text} key={i}>
            {el}
          </li>
        ))}
      </div>
      <p className={`${styles.text} ${styles.details}`}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>
    </section>
  );
};

export default Desctiption;
