import React from "react";
import { useState } from "react";
import styles from "./styles.module.css";

const Input = ({ label, type, name, placeholder, onChange, value }) => {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        className={styles.input}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
