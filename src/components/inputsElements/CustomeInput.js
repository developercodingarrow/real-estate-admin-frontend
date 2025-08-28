"use client";
import React from "react";
import styles from "./customeinput.module.css";
export default function CustomeInput(props) {
  const { inputPlacholder = "", inputLabel, ...inputProps } = props;
  return (
    <div className={styles.input_container}>
      <div className={styles.lable_wrapper}>
        <label className={styles.lable_style}>{inputLabel}</label>
      </div>
      <div className={styles.input_wrapper}>
        <input
          type="text"
          placeholder={inputPlacholder}
          className={styles.text_inputStyle}
          suppressHydrationWarning={true}
          {...inputProps}
        />
      </div>
    </div>
  );
}
