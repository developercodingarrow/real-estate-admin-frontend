import React from "react";
import styles from "../sellAppartment/sellapartment.module.css";
import AreaInput from "@/src/components/inputsElements/AreaInput";

export default function HouseAreaSection(props) {
  const { sectionTitle } = props;
  return (
    <section className={styles.section_container}>
      {" "}
      <div className={styles.section_column}>
        {" "}
        <div className={styles.section_heading_wrapper}>{sectionTitle}</div>
        <div className={styles.section_column_wrapper}>
          <div className={styles.section_TitleColumn}>
            <div className={styles.column_title}>project Built Up Area</div>
            <div className={styles.column_fileds}>
              <AreaInput inputPlaceholder="Built-up-area" />
            </div>
          </div>
          <div className={styles.section_TitleColumn}>
            <div className={styles.column_title}>project Carpet Area</div>
            <div className={styles.column_fileds}>
              <AreaInput inputPlaceholder="carpet area" />
            </div>
          </div>
          <div className={styles.section_TitleColumn}>
            <div className={styles.column_title}>
              Project Super Built Up Area
            </div>
            <div className={styles.column_fileds}>
              <AreaInput inputPlaceholder="super built-up-area" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
