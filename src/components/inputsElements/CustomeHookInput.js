"use client";
import React from "react";
import styles from "./customeinput.module.css";

export default function CustomeHookInput(props) {
  const {
    inputLabel,
    inputPlaceholder = "",
    name,
    type = "text",
    register,
    rules,
    error,
  } = props;
  return (
    <div className={styles.input_container}>
      {inputLabel && (
        <div className={styles.lable_wrapper}>
          <label className={styles.lable_style} htmlFor={name}>
            {inputLabel}
          </label>
        </div>
      )}

      <div className={styles.input_wrapper}>
        <input
          id={name}
          type={type}
          placeholder={inputPlaceholder}
          className={`${styles.text_inputStyle} ${
            error ? styles.errorBorder : ""
          }`}
          {...register(name, rules)} // <-- ✅ here we connect RHF
        />
      </div>
      
      {error && <p className={styles.error_text}>{error}</p>}
    </div>
  );
}
