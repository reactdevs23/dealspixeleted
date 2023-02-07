import React, { useEffect } from "react";
import styles from "./styles.module.css";

const Modal = ({ children }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);
  return (
    <>
      <div className={styles.modal}>{children}</div>
      <div className={styles.overlay}></div>
    </>
  );
};
export default Modal;
