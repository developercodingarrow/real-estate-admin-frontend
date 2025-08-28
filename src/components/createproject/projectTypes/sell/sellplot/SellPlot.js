import React from "react";
import styles from "../sellAppartment/sellapartment.module.css";
import PlotLocation from "./PlotLocation";
import PloteArea from "./PloteArea";
import PlotBasicDetails from "./PlotBasicDetails";
export default function SellPlot() {
  return (
    <div className={styles.main_conianter}>
      <div className={styles.fileds_wrapper}>
        <PlotLocation />
      </div>
      <div className={styles.fileds_wrapper}>
        <PloteArea />
      </div>
      <div className={styles.fileds_wrapper}>
        <PlotBasicDetails />
      </div>
    </div>
  );
}
