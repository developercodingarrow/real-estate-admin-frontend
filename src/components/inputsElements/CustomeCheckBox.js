import React from "react";
import styles from "./customechecbox.module.css";

export default function CustomeCheckBox({
  label,
  checked = false,
  onChange,
  name,
  value,
  id,
  disabled = false,
  labelPosition = "right",
  size = "medium",
}) {
  // Remove the useState and use the checked prop directly
  const handleChange = (e) => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className={styles.checkboxContainer}>
      {labelPosition === "left" && (
        <label htmlFor={id} className={styles.checkboxLabel}>
          {label}
        </label>
      )}

      <div className={styles.checkboxWrapper}>
        <input
          type="checkbox"
          id={id}
          name={name}
          value={value}
          checked={checked} // Use the prop directly
          onChange={handleChange}
          disabled={disabled}
          className={styles.hiddenCheckbox}
        />
        <div
          className={`${styles.customCheckbox} ${styles[size]} ${
            checked ? styles.checked : "" // Use the prop here too
          } ${disabled ? styles.disabled : ""}`}
        >
          {checked && ( // And here
            <svg
              className={styles.checkmark}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 6L9 17L4 12"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </div>

      {labelPosition === "right" && (
        <label htmlFor={id} className={styles.checkboxLabel}>
          {label}
        </label>
      )}
    </div>
  );
}
