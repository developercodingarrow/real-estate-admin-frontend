"use client";
import React from "react";
import styles from "./customeinput.module.css";
import { Controller } from "react-hook-form";
export default function CustomeHookInput(props) {
  const {
    inputLabel,
    inputPlaceholder = "",
    name,
    type = "text",
    register,
    rules,
    error,
    control,
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
        <Controller
          name={name}
          control={control}
          rules={rules}
          render={({ field }) => (
            <input
              {...field}
              id={name}
              type={type}
              placeholder={inputPlaceholder}
              className={`${styles.text_inputStyle} ${
                error ? styles.errorBorder : ""
              }`}
            />
          )}
        />
      </div>

      {error && <p className={styles.error_text}>{error}</p>}
    </div>
  );
}
