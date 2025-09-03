"use client";
import React from "react";
import styles from "./hookradioBtn.module.css";
import { useForm, Controller } from "react-hook-form";
export default function HookRadiobtn(props) {
  const {
    control,
    name,
    options,
    radioStyle = "pill",
    size = "medium",
    color = "#3b82f6",
  } = props;

  return (
    <div>
      <div>
        <Controller
          name={name} // dynamic name
          control={control}
          rules={{ required: true }} // Add validation rules if needed
          render={({ field: { onChange, value } }) => (
            <div className={styles.radio_group}>
              {options.map((opt) => (
                <div
                  className={`${styles.radio_wrapper} ${styles[radioStyle]} ${styles[size]}`}
                >
                  <label
                    key={opt.value}
                    htmlFor={opt.value}
                    className={styles.radio_label}
                    style={{ "--radio-color": color }} // CSS variable for color
                  >
                    <input
                      type="radio"
                      value={opt.value}
                      checked={value === opt.value}
                      onChange={() => onChange(opt.value)}
                      className={styles.radio_input}
                    />
                    {opt.label}
                  </label>
                </div>
              ))}
            </div>
          )}
        />
      </div>
    </div>
  );
}
