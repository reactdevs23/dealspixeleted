import React, { useState } from "react";
import styles from "./styles.module.css";
function ToggleButton({ text }) {
  const [on, setOnState] = useState(false);

  const toggle = () => setOnState((prev) => !prev);
  return (
    <div className={styles.buttonContainer}>
      <button
        className={`${on ? styles.on : styles.off} ${styles.button}`}
        onClick={toggle}
      >
        <span className={styles.pin} />
      </button>
      <p className={styles.text}>{text}</p>
    </div>
  );
}

export default ToggleButton;
