import React from "react";
import styles from "../sellAppartment/sellapartment.module.css";
import HouseAreaSection from "../sellindependenthouse/HouseAreaSection";
import HouseRoomDetails from "../sellindependenthouse/HouseRoomDetails";
import HouseBaiseDetails from "../sellindependenthouse/HouseBaiseDetails";

export default function SellVilla() {
  return (
    <div className={styles.main_conianter}>
      <div className={styles.fileds_wrapper}>
        <HouseAreaSection sectionTitle="Villa Area" />
      </div>

      <div className={styles.fileds_wrapper}>
        <HouseRoomDetails sectionTitle="Villa  structure details" />
      </div>

      <div className={styles.fileds_wrapper}>
        <HouseBaiseDetails sectionTitle="Baise details" />
      </div>
    </div>
  );
}
