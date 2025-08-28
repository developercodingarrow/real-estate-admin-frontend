import React from "react";
import styles from "../sellAppartment/sellapartment.module.css";
import HouseAreaSection from "./HouseAreaSection";
import HouseRoomDetails from "./HouseRoomDetails";
import HouseBaiseDetails from "./HouseBaiseDetails";
export default function SellIndependentHouse() {
  return (
    <div className={styles.main_conianter}>
      <div className={styles.fileds_wrapper}>
        <HouseAreaSection sectionTitle="House Area" />
      </div>

      <div className={styles.fileds_wrapper}>
        <HouseRoomDetails sectionTitle="House structure details" />
      </div>

      <div className={styles.fileds_wrapper}>
        <HouseBaiseDetails sectionTitle="Baise details" />
      </div>
    </div>
  );
}
