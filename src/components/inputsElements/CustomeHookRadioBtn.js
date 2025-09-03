"use client";
import React from "react";
import styles from "./customeradiobtn.module.css";
import { useController } from "react-hook-form";

export default function CustomeHookRadioBtn({
  control,
  name,
  rules,
  radioStyle = "pill", // default style
  size = "medium",
  color = "#3b82f6", // default color
  options = [],
}) {
  console.log("name--", name);
  return (
    <div className={styles.radio_group}>
      {options.map((option) => (
        <div
          key={option.value}
          className={`${styles.radio_wrapper} ${styles[radioStyle]} ${styles[size]}`}
        >
          {/* Hook controlled input */}
          <input
            type="radio"
            id={option.value}
            value={option.value}
            {...control.register(name, rules)}
            className={styles.radio_input}
          />
          <label
            htmlFor={option.value}
            className={styles.radio_label}
            style={{ "--radio-color": color }}
          >
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
}
