"use client";
import React from "react";
import styles from "./blog.module.css";
// import SteperBox from "../projectsUpdate/layoutUi/SteperBox";
import BlgSteper from "./BlgSteper";
export default function BlogLayout({ children, steps }) {
  return (
    <div className={styles.main_container}>
      <div className={styles.inner_container}>
        <div className={styles.left_column}>
          <div className={styles.children_wrapper}>{children}</div>
        </div>
        <div className={styles.right_column}>
          <BlgSteper currentStep={steps} />
        </div>
      </div>
    </div>
  );
}
