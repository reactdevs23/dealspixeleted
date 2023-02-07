import React, { useEffect } from "react";
import styles from "./styles.module.css";

const Modal = ({ children, setModal }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, []);
  return (
    <>
      <div className={styles.modal}>{children}</div>
      <div className={styles.overlay} onClick={() => setModal(false)}></div>
    </>
  );
};
export default Modal;
