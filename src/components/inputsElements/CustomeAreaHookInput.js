"use client";
import React, { useEffect, useState } from "react";
import styles from "./areainput.module.css";
import { Controller } from "react-hook-form";
export default function CustomeAreaHookInput(props) {
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
    <div className={styles.main_container}>
      <div className={styles.lable_wrapper}>
        <label className={styles.lable_style}>{inputLabel}</label>
      </div>

      <div className={styles.inputBox_wrapper}>
        <div className={styles.input_wrapper}>
          {/* <input
            id={name}
            type={type}
            placeholder={inputPlaceholder}
            className={styles.inputStyle}
            {...register(name, rules)}
          /> */}
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
                className={styles.inputStyle}
              />
            )}
          />
        </div>
        <div className={styles.area_text_wrapper}>sq.ft.</div>
      </div>

      {error && <p className={styles.error_text}>{error}</p>}
    </div>
  );
}
