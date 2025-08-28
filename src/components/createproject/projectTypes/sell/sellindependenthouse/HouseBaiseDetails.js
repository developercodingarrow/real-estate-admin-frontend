import React, { useState } from "react";
import styles from "../sellAppartment/sellapartment.module.css";
import CustomeInput from "@/src/components/inputsElements/CustomeInput";
import CustomeRadioBtn from "@/src/components/inputsElements/CustomeRadioBtn";

export default function HouseBaiseDetails(props) {
  const { sectionTitle } = props;
  const [selectedAvailabilityStatus, setselectedAvailabilityStatus] =
    useState("");

  const handleHouseAvailabilityChange = (e) => {
    console.log(e.target.value);
    setselectedAvailabilityStatus(e.target.value);
  };
  return (
    <section className={styles.section_container}>
      <div className={styles.section_column}>
        <div className={styles.section_heading_wrapper}>{sectionTitle}</div>
        <div className={styles.section_column_wrapper}>
          <div className={styles.section_TitleColumn}>
            <div className={styles.column_title}>Total Floors</div>
            <div className={styles.inline_column_fileds}>
              <CustomeInput inputPlacholder="Total Floors" />
            </div>
          </div>

          <div className={styles.section_TitleColumn}>
            <div className={styles.column_title}>Price Details</div>
            <div className={styles.inline_column_fileds}>
              <CustomeInput inputPlacholder="Expected Price" />
            </div>
          </div>

          <div className={styles.section_TitleColumn}>
            <div className={styles.column_title}>Availability Status</div>
            <div className={styles.inline_column_fileds}>
              <CustomeRadioBtn
                name="selectedAvailabilityStatus"
                radioValue="ready-to-move"
                radioLable="Ready To Move"
                labelHhtmlFor="selectedAvailabilityStatusOption1"
                RadioId="selectedAvailabilityStatusOption1"
                radioStyle="pill"
                color="#0078db" // green
                checked={selectedAvailabilityStatus === "ready-to-move"}
                onChange={handleHouseAvailabilityChange}
              />
              <CustomeRadioBtn
                name="selectedAvailabilityStatus"
                radioValue="under-construction"
                radioLable="Under construction"
                labelHhtmlFor="selectedAvailabilityStatusOption2"
                RadioId="selectedAvailabilityStatusOption2"
                radioStyle="pill"
                color="#0078db" // green
                checked={selectedAvailabilityStatus === "under-construction"}
                onChange={handleHouseAvailabilityChange}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
