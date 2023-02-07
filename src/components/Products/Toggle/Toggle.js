import React, { useState } from "react";
import styles from "./styles.module.css";
function ToggleButton({ text }) {
  const [on, setOnState] = useState(false);

  const toggle = () => setOnState((o) => !o);
  return (
    <div className={styles.buttonContainer}>
      <button
        className={`${on ? styles.on : styles.off} ${styles.button}`}
        on={on}
        onClick={toggle}
      >
        <span className={styles.pin} />
      </button>
      <p className={styles.text}>{text}</p>
    </div>
  );
}

export default ToggleButton;
