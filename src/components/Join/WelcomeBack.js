import React, { useState } from "react";

import { Link } from "react-router-dom";
import CheckBox from "../Checkbox/CheckBox";

import Input from "../Input/Input";
import styles from "./styles.module.css";
const WelcomeBack = () => {
  const [checked, setChecked] = useState(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const inputs = [
    {
      label: "Email",
      type: "email",
      name: "email",
      placeholder: "Enter your email",
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      placeholder: "Enter your password",
    },
  ];
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const responseGoogle = (response) => {
    // console.log(response);
  };
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Welcome Back</h3>
      <p className={styles.text}>Log In to your account below</p>
      <form className={styles.form}>
        {inputs.map((el, i) => (
          <Input {...el} key={i} value={values[el.name]} onChange={onChange} />
        ))}
        <div className={styles.checkBoxContainer}>
          <CheckBox
            checked={checked}
            setChecked={setChecked}
            label="Remember for 30 days"
          />
          <p className={styles.signUp}>Forgot Password</p>
        </div>

        <button className={styles.button}>Sign in</button>

        <a href="#/" className={styles.googleButton}>
          FcGoogle Sign in with Google
        </a>
        <p className={styles.haveAccount}>
          Sign up Not a member?
          <Link className={styles.signUp} to="/createaccount">
            Create an Account
          </Link>
        </p>
      </form>
    </div>
  );
};

export default WelcomeBack;
