import React from "react";
import styles from "./projectamenities.module.css";
import CreateStaticBox from "../startCreate/CreateStaticBox";
import TabBar from "./TabBar";
import CustomeCheckBox from "../inputsElements/CustomeCheckBox";
import AllAmenities from "./AllAmenities";
export default function ProjectAmenities() {
  return (
    <div className={styles.amnities_mainConatiner}>
      <div className={styles.inner_conatiner}>
        <div className={styles.amnities_column}>
          <div className={styles.fillter_tab_wrapper}>
            <TabBar />
          </div>
          <div>
            <AllAmenities />
          </div>
        </div>
        <div className={styles.static_box_wrapper}>
          <CreateStaticBox boxTitle="Important Guid" />
        </div>
      </div>
    </div>
  );
}
