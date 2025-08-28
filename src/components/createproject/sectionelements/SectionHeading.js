import React from "react";
import styles from "./sectionelements.module.css";
export default function SectionHeading(props) {
  const { sectionTitle } = props;
  return (
    <div className={styles.section_heading}>
      <h4>{sectionTitle}</h4>
    </div>
  );
}
