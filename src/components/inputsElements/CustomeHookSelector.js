"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./customeselector.module.css";

export default function CustomeHookSelector(props) {
  const { label, name, options, register, rules, error, value, onChange } =
    props;

  return (
    <div className={styles.selector_container}>
      {label && (
        <div className={styles.lable_wrapper}>
          <label className={styles.lable_style} htmlFor={name}>
            {label}
          </label>
        </div>
      )}

      <div className={styles.input_wrapper}>
        <select
          id={name}
          className={`${styles.text_inputStyle} ${
            error ? styles.errorBorder : ""
          }`}
          // defaultValue=""
          // {...(register ? register(name, rules) : {})} // <-- register applied here
          value={value || ""} // <-- controlled value
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="">Select {label}</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {error && <p className={styles.error_text}>{error}</p>}
    </div>
  );
}
