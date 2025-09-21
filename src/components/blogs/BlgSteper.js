import React from "react";
import styles from "./bogsteper.module.css";
export default function BlgSteper(props) {
  const { currentStep = 3 } = props;
  const steps = ["Blog", "Image", "Keywords/unique slug"];
  return (
    <div className={styles.main_container}>
      <div className={styles.steper_infoBox}>
        Follow each step to ensure your Blog performs at its best.
      </div>
      <div className={styles.steper_container}>
        {steps.map((step, index) => (
          <div key={index} className={styles.step_wrapper}>
            <div className={styles.circle_wrapper}>
              <div
                className={`${styles.circle} ${
                  index + 1 <= currentStep ? styles.active : ""
                }`}
              >
                <span className={styles.dot}></span>
              </div>
              {index !== steps.length - 1 && (
                <div
                  className={`${styles.line} ${
                    index + 1 < currentStep ? styles.activeLine : ""
                  }`}
                ></div>
              )}
            </div>
            <div className={styles.step_label}>{step}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
