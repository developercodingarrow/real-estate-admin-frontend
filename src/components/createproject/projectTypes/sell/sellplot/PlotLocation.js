import React from "react";
import styles from "../sellAppartment/sellapartment.module.css";
import CustomeSelector from "@/src/components/inputsElements/CustomeSelector";
import CustomeInput from "@/src/components/inputsElements/CustomeInput";
export default function PlotLocation() {
  const projectCity = [
    { value: "gurgaon", label: "Gurgaon" },
    { value: "pune ", label: "pune " },
    { value: "kolkata ", label: "Kolkata " },
    { value: "mumbai ", label: "Mumbai " },
  ];
  const projectLocation = [
    { value: "sector-67", label: "sector 67" },
    { value: "dwarka-express ", label: "Dwarka Expressway " },
    { value: "sohna ", label: "Sohna " },
    { value: "south-city ", label: "Soucth City " },
  ];
  return (
    <section className={styles.section_container}>
      <div className={styles.section_column}>
        <div className={styles.section_heading_wrapper}>Plot Location</div>
        <div className={styles.section_column_wrapper}>
          <div className={styles.section_TitleColumn}>
            <div className={styles.column_title}>Plot City</div>
            <div className={styles.column_fileds}>
              <CustomeSelector
                options={projectCity}
                defaultSelected="gurgaon"
                onSelect={(value) => console.log("Selected:", value)}
                placeholder="Plot City"
              />
            </div>
          </div>
          <div className={styles.section_TitleColumn}>
            <div className={styles.column_title}>project Location</div>
            <div className={styles.column_fileds}>
              <CustomeSelector
                options={projectLocation}
                defaultSelected="luxury"
                onSelect={(value) => console.log("Selected:", value)}
                placeholder="Plot Location"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section_column}>
        <div className={styles.section_heading_wrapper}>Price Details</div>
        <div className={styles.section_column_wrapper}>
          <div className={styles.section_TitleColumn}>
            <div className={styles.column_title}>Price</div>
            <div className={styles.column_fileds}>
              <CustomeInput inputPlacholder="Expected Price" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
