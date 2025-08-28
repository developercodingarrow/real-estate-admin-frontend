import React from "react";
import styles from "./navbar.module.css";
export default function MainNavbar() {
  return (
    <div className={styles.main_container}>
      <div className="">
        <h2>Home</h2>
      </div>
      <div className={styles.btn_style}>info@saranshrealtors.com</div>
    </div>
  );
}
