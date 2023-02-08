import React from "react";
import { bigLogo } from "../../assets/images/images";
import SignUpComponent from "../ModalAndSignUpSignIn/SignUp";
import styles from "./styles.module.css";

const SignUp = () => {
  return (
    <div className={styles.signUpContainer}>
      <div className={`${styles.signUp} container`}>
        <div className={styles.logoContainer}>
          <img src={bigLogo} alt="#" className={styles.logo} />
        </div>
        <SignUpComponent />
      </div>
    </div>
  );
};

export default SignUp;
