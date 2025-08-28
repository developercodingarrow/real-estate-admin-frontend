"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./customeselector.module.css";

export default function CustomeSelector({
  options = [],
  defaultSelected = "",
  onSelect = () => {},
  placeholder = "Select an option",
  value,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedInternal, setSelectedInternal] = useState(defaultSelected);

  const dropdownRef = useRef(null);

  // If parent provides a controlled `value`, sync local state
  useEffect(() => {
    if (typeof value !== "undefined") {
      setSelectedInternal(value);
    }
  }, [value]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (value) => {
    setSelectedInternal(value);
    onSelect(value);
    setIsOpen(false);
  };

  const selectedLabel =
    options.find((opt) => opt.value === selectedInternal)?.label || placeholder;

  return (
    <div className={styles.selector_container} ref={dropdownRef}>
      <div
        className={`${styles.selector_header} ${isOpen ? styles.open : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedLabel}</span>
        <svg
          className={`${styles.arrow} ${isOpen ? styles.rotated : ""}`}
          viewBox="0 0 24 24"
        >
          <path d="M7 10l5 5 5-5z" />
        </svg>
      </div>

      {isOpen && (
        <div className={styles.options_list}>
          {options.map((option) => (
            <div
              key={option.value}
              className={`${styles.option_item} ${
                selectedInternal === option.value ? styles.selected : ""
              }`}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
