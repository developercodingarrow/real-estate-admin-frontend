import React, { useState } from "react";
import styles from "../sellAppartment/sellapartment.module.css";
import CustomeRadioBtn from "@/src/components/inputsElements/CustomeRadioBtn";

export default function HouseRoomDetails(props) {
  const { sectionTitle } = props;
  const [selectedBedrooms, setselectedBedrooms] = useState("");
  const [selectedBathrooms, setselectedBathrooms] = useState("");
  const [selectedBalconies, setselectedBalconies] = useState("");

  const handleHouseRoomsChange = (e) => {
    console.log(e.target.value);
    setselectedBedrooms(e.target.value);
  };
  const handleHouseBathroomChange = (e) => {
    console.log(e.target.value);
    setselectedBathrooms(e.target.value);
  };

  const handleHouseBalconieshange = (e) => {
    console.log(e.target.value);
    setselectedBalconies(e.target.value);
  };
  return (
    <section className={styles.section_container}>
      <div className={styles.section_column}>
        <div className={styles.section_heading_wrapper}>{sectionTitle}</div>
        <div className={styles.section_column_wrapper}>
          <div className={styles.section_TitleColumn}>
            <div className={styles.column_title}>No of Open Beadrooms</div>
            <div className={styles.inline_column_fileds}>
              <CustomeRadioBtn
                name="selectedBedrooms"
                radioValue="1"
                radioLable="1"
                labelHhtmlFor="selectedBedroomsOption1"
                RadioId="selectedBedroomsOption1"
                radioStyle="pill"
                color="#0078db" // green
                checked={selectedBedrooms === "1"}
                onChange={handleHouseRoomsChange}
              />

              <CustomeRadioBtn
                name="selectedBedrooms"
                radioValue="2"
                radioLable="2"
                labelHhtmlFor="selectedBedroomsOption2"
                RadioId="selectedBedroomsOption2"
                radioStyle="pill"
                color="#0078db" // green
                checked={selectedBedrooms === "2"}
                onChange={handleHouseRoomsChange}
              />
              <CustomeRadioBtn
                name="selectedBedrooms"
                radioValue="3"
                radioLable="3"
                labelHhtmlFor="selectedBedroomsOption3"
                RadioId="selectedBedroomsOption3"
                radioStyle="pill"
                color="#0078db" // green
                checked={selectedBedrooms === "3"}
                onChange={handleHouseRoomsChange}
              />

              <CustomeRadioBtn
                name="selectedBedrooms"
                radioValue="4"
                radioLable="4"
                labelHhtmlFor="selectedBedroomsOption4"
                RadioId="selectedBedroomsOption4"
                radioStyle="pill"
                color="#0078db" // green
                checked={selectedBedrooms === "4"}
                onChange={handleHouseRoomsChange}
              />
            </div>
          </div>
          <div className={styles.section_TitleColumn}>
            <div className={styles.column_title}>No of Bathrooms</div>
            <div className={styles.inline_column_fileds}>
              <CustomeRadioBtn
                name="selectedBathrooms"
                radioValue="1"
                radioLable="1"
                labelHhtmlFor="selectedBathroomsOption1"
                RadioId="selectedBathroomsOption1"
                radioStyle="pill"
                color="#0078db" // green
                checked={selectedBathrooms === "1"}
                onChange={handleHouseBathroomChange}
              />

              <CustomeRadioBtn
                name="selectedBathrooms"
                radioValue="2"
                radioLable="2"
                labelHhtmlFor="selectedBathroomsOption2"
                RadioId="selectedBathroomsOption2"
                radioStyle="pill"
                color="#0078db" // green
                checked={selectedBathrooms === "2"}
                onChange={handleHouseBathroomChange}
              />

              <CustomeRadioBtn
                name="selectedBathrooms"
                radioValue="3"
                radioLable="3"
                labelHhtmlFor="selectedBathroomsOption3"
                RadioId="selectedBathroomsOption3"
                radioStyle="pill"
                color="#0078db" // green
                checked={selectedBathrooms === "3"}
                onChange={handleHouseBathroomChange}
              />

              <CustomeRadioBtn
                name="selectedBathrooms"
                radioValue="4"
                radioLable="4"
                labelHhtmlFor="selectedBathroomsOption4"
                RadioId="selectedBathroomsOption4"
                radioStyle="pill"
                color="#0078db" // green
                checked={selectedBathrooms === "4"}
                onChange={handleHouseBathroomChange}
              />
            </div>
          </div>
          <div className={styles.section_TitleColumn}>
            <div className={styles.column_title}>No of Balconices</div>
            <div className={styles.inline_column_fileds}>
              <CustomeRadioBtn
                name="selectedBalconies"
                radioValue="1"
                radioLable="1"
                labelHhtmlFor="selectedBalconiesOption1"
                RadioId="selectedBalconiesOption1"
                radioStyle="pill"
                color="#0078db" // green
                checked={selectedBalconies === "1"}
                onChange={handleHouseBalconieshange}
              />
              <CustomeRadioBtn
                name="selectedBalconies"
                radioValue="2"
                radioLable="2"
                labelHhtmlFor="selectedBalconiesOption2"
                RadioId="selectedBalconiesOption2"
                radioStyle="pill"
                color="#0078db" // green
                checked={selectedBalconies === "2"}
                onChange={handleHouseBalconieshange}
              />
              <CustomeRadioBtn
                name="selectedBalconies"
                radioValue="3"
                radioLable="3"
                labelHhtmlFor="selectedBalconiesOption3"
                RadioId="selectedBalconiesOption3"
                radioStyle="pill"
                color="#0078db" // green
                checked={selectedBalconies === "3"}
                onChange={handleHouseBalconieshange}
              />
              <CustomeRadioBtn
                name="selectedBalconies"
                radioValue="4"
                radioLable="4"
                labelHhtmlFor="selectedBalconiesOption4"
                RadioId="selectedBalconiesOption4"
                radioStyle="pill"
                color="#0078db" // green
                checked={selectedBalconies === "4"}
                onChange={handleHouseBalconieshange}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
