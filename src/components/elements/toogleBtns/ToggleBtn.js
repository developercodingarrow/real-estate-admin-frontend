"use client";
import React, { useEffect, useState } from "react";
import styles from "./togglebtn.module.css";

export default function ToggleBtn({ onToggle, initial = false }) {
  const [isOn, setIsOn] = useState(initial);

  // Sync when "initial" prop changes (e.g. API response)
  useEffect(() => {
    setIsOn(initial);
  }, [initial]);

  const handleClick = () => {
    const newState = !isOn;
    setIsOn(newState);
    if (onToggle) onToggle(newState);
  };

  return (
    <div
      className={`${styles.toggle} ${isOn ? styles.on : ""}`}
      onClick={handleClick}
    >
      <div className={styles.circle}></div>
    </div>
  );
}
