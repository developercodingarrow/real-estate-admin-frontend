import React from "react";
import styles from "./updateprojectuilayout.module.css";
import SteperBox from "./SteperBox";
export default function UpdateProjectUiLayout({ children, steps }) {
  return (
    <div className={styles.main_container}>
      <div className={styles.inner_container}>
        <div className={styles.left_column}>
          <div className={styles.children_wrapper}>{children}</div>
        </div>
        <div className={styles.right_column}>
          <SteperBox currentStep={steps} />
        </div>
      </div>
    </div>
  );
}
