"use client";
import React, { useEffect, useState } from "react";
import styles from "./areainput.module.css";
export default function AreaInput(props) {
  const { inputPlaceholder = "", inputLabel, ...inputProps } = props;

  const { ref, ...restProps } = inputProps;
  return (
    <div className={styles.main_container}>
      <div className={styles.lable_wrapper}>
        <label className={styles.lable_style}>{inputLabel}</label>
      </div>

      <div className={styles.inputBox_wrapper}>
        <div className={styles.input_wrapper}>
          <input
            ref={ref}
            type="text"
            placeholder={inputPlaceholder}
            className={styles.inputStyle}
            {...inputProps}
          />
        </div>
        <div className={styles.area_text_wrapper}>sq.ft.</div>
      </div>
    </div>
  );
}
