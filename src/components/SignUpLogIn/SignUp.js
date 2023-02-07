import React from "react";
import { bigLogo } from "../../assets/images/images";
import Join from "../Join/Join";
import styles from "./styles.module.css";

const SignUp = () => {
  return (
    <div className={styles.signUpContainer}>
      <div className={`${styles.signUp} container`}>
        <div className={styles.logoContainer}>
          <img src={bigLogo} alt="#" className={styles.logo} />
        </div>
        <Join />
      </div>
    </div>
  );
};

export default SignUp;
