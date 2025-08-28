import React from "react";
import styles from "./css/pilltext.module.css";
export default function PillText(props) {
  const { pillText, pillSize } = props;
  return (
    <div className={`${styles.pill_container} ${styles[pillSize]}`}>
      {pillText}
    </div>
  );
}
