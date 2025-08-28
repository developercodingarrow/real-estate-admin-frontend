import React from "react";
import styles from "../sellAppartment/sellapartment.module.css";
import AreaInput from "@/src/components/inputsElements/AreaInput";
import CustomeInput from "@/src/components/inputsElements/CustomeInput";

export default function PloteArea() {
  return (
    <section className={styles.section_container}>
      <div className={styles.section_column}>
        <div className={styles.section_heading_wrapper}>Plot Dimesnsions</div>
        <div className={styles.section_column_wrapper}>
          <div className={styles.section_TitleColumn}>
            <div className={styles.column_title}>Plot Area</div>
            <div className={styles.column_fileds}>
              <AreaInput inputPlaceholder="plot area" />
            </div>
          </div>
          <div className={styles.section_TitleColumn}>
            <div className={styles.column_title}>project width</div>
            <div className={styles.column_fileds}>
              <CustomeInput inputPlacholder="plot width" />
            </div>
          </div>
          <div className={styles.section_TitleColumn}>
            <div className={styles.column_title}>project Length</div>
            <div className={styles.column_fileds}>
              <CustomeInput inputPlacholder="plot Length" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
