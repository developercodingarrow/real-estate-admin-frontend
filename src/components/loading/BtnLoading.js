import React from "react";
import styles from "./btnloading.module.css";

export default function BtnLoading(props) {
  const { loadingSize = "small" } = props;
  return (
    <div className={styles.loading_container}>
      <div className={`${styles.loader} ${styles[loadingSize]}`}></div>
    </div>
  );
}
