import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import { Link } from "react-router-dom";
import CheckBox from "../Checkbox/CheckBox";

import Input from "../Input/Input";
import styles from "./styles.module.css";
const Join = () => {
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
      <h3 className={styles.title}>Join Deals Pixelated</h3>
      <p className={styles.text}>Find and share great deals</p>
      <form className={styles.form}>
        {inputs.map((el, i) => (
          <Input {...el} key={i} value={values[el.name]} onChange={onChange} />
        ))}
        <div>
          <CheckBox
            checked={checked}
            setChecked={setChecked}
            label="Remember for 30 days"
          />
        </div>

        <button className={styles.button}>Sign in</button>

        <GoogleLogin
          className="google"
          clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          buttonText="Sign in with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
          style={{ boxShadow: "none" }}
        />
        <p className={styles.haveAccount}>
          Don’t have an account?
          <Link className={styles.signUp} to="/signup">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Join;
