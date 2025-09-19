import React from "react";
import styles from "./empitylist.module.css";
export default function EmptyListMessage(props) {
  const { message = "No items found" } = props;
  return (
    <div className={styles.container}>
      <p className={styles.message}>{message}</p>
    </div>
  );
}
