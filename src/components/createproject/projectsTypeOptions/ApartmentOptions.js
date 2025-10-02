"use client";
import React, { useState } from "react";
import styles from "./projectsoptions.module.css";
import CustomeRadioBtn from "../../inputsElements/CustomeRadioBtn";
import AreaInput from "../../inputsElements/AreaInput";
import CustomeSelector from "../../inputsElements/CustomeSelector";
import SectionHeading from "../sectionelements/SectionHeading";
export default function ApartmentOptions() {
  const [slectedFlatRoom, setslectedFlatRoom] = useState("");
  const [selectedFlateBathrooms, setselectedFlateBathrooms] = useState("");
  const [selectedBalconies, setselectedBalconies] = useState("");
  const [slectedApartmentStatus, setslectedApartmentStatus] = useState("");

  const [selectedAvailability, setselectedAvailability] = useState("");
  const handleFlatsRoomsChange = (e) => {
    setslectedFlatRoom(e.target.value);
  };

  const handleFlatsBathRoomsChange = (e) => {
    setselectedFlateBathrooms(e.target.value);
  };

  const handleFlatsBalconicesChange = (e) => {
    setselectedBalconies(e.target.value);
  };
  const handleFlatsStatusChange = (e) => {
    setslectedApartmentStatus(e.target.value);
  };

  const handleFlatsAvailabilityStatusChange = (e) => {
    setselectedAvailability(e.target.value);
  };

  const totalNoFollor = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
    { value: "10", label: "10" },
  ];

  const propertyNoFollor = [
    { value: "basement", label: "Basement" },
    { value: "lower-ground", label: "Lower Ground" },
    { value: "ground", label: "ground" },
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
    { value: "10", label: "10" },
  ];

  return (
    <div className={styles.main_container}>
      <div className={styles.inner_container}>
        <section className={styles.section_container}>
          <div className={styles.section_heading}>
            <h3>Add Room Details</h3>
          </div>

          <div className={styles.column_options_wrapper}>
            <div className={styles.column_option}>
              <div className={styles.option_title}>
                <SectionHeading sectionTitle="No. of Beadrooms" />
              </div>
              <div className={styles.inline_optionsBox}>
                <CustomeRadioBtn
                  name="flatrooms"
                  radioValue="1"
                  radioLable="1"
                  labelHhtmlFor="roomOption1"
                  RadioId="roomOption1"
                  radioStyle="small_circle"
                  color="#10b981" // green
                  checked={slectedFlatRoom === "1"}
                  onChange={handleFlatsRoomsChange}
                />
                <CustomeRadioBtn
                  name="flatrooms"
                  radioValue="2"
                  radioLable="2"
                  labelHhtmlFor="roomOption2"
                  RadioId="roomOption2"
                  radioStyle="small_circle"
                  color="#10b981" // green
                  checked={slectedFlatRoom === "2"}
                  onChange={handleFlatsRoomsChange}
                />

                <CustomeRadioBtn
                  name="flatrooms"
                  radioValue="3"
                  radioLable="3"
                  labelHhtmlFor="roomOption3"
                  RadioId="roomOption3"
                  radioStyle="small_circle"
                  color="#10b981" // green
                  checked={slectedFlatRoom === "3"}
                  onChange={handleFlatsRoomsChange}
                />
                <CustomeRadioBtn
                  name="flatrooms"
                  radioValue="4"
                  radioLable="4"
                  labelHhtmlFor="roomOption4"
                  RadioId="roomOption4"
                  radioStyle="small_circle"
                  color="#10b981" // green
                  checked={slectedFlatRoom === "4"}
                  onChange={handleFlatsRoomsChange}
                />
              </div>
            </div>

            <div className={styles.column_option}>
              <div className={styles.option_title}>
                <SectionHeading sectionTitle="No. of Bathrooms" />
              </div>
              <div className={styles.inline_optionsBox}>
                <CustomeRadioBtn
                  name="flatbathroom"
                  radioValue="1"
                  radioLable="1"
                  labelHhtmlFor="bathroomOption1"
                  RadioId="bathroomOption1"
                  radioStyle="small_circle"
                  color="#10b981" // green
                  checked={selectedFlateBathrooms === "1"}
                  onChange={handleFlatsBathRoomsChange}
                />
                <CustomeRadioBtn
                  name="flatbathroom"
                  radioValue="2"
                  radioLable="2"
                  labelHhtmlFor="bathroomOption2"
                  RadioId="bathroomOption2"
                  radioStyle="small_circle"
                  color="#10b981" // green
                  checked={selectedFlateBathrooms === "2"}
                  onChange={handleFlatsBathRoomsChange}
                />
                <CustomeRadioBtn
                  name="flatbathroom"
                  radioValue="3"
                  radioLable="3"
                  labelHhtmlFor="bathroomOption3"
                  RadioId="bathroomOption3"
                  radioStyle="small_circle"
                  color="#10b981" // green
                  checked={selectedFlateBathrooms === "3"}
                  onChange={handleFlatsBathRoomsChange}
                />
                <CustomeRadioBtn
                  name="flatbathroom"
                  radioValue="4"
                  radioLable="4"
                  labelHhtmlFor="bathroomOption4"
                  RadioId="bathroomOption4"
                  radioStyle="small_circle"
                  color="#10b981" // green
                  checked={selectedFlateBathrooms === "4"}
                  onChange={handleFlatsBathRoomsChange}
                />
              </div>
            </div>

            <div className={styles.column_option}>
              <div className={styles.option_title}>
                <SectionHeading sectionTitle="No. of Balconies" />
              </div>
              <div className={styles.inline_optionsBox}>
                <CustomeRadioBtn
                  name="flatbalconices"
                  radioValue="1"
                  radioLable="1"
                  labelHhtmlFor="balconicesOption1"
                  RadioId="balconicesOption1"
                  radioStyle="small_circle"
                  color="#10b981" // green
                  checked={selectedBalconies === "1"}
                  onChange={handleFlatsBalconicesChange}
                />
                <CustomeRadioBtn
                  name="flatbalconices"
                  radioValue="2"
                  radioLable="2"
                  labelHhtmlFor="balconicesOption2"
                  RadioId="balconicesOption2"
                  radioStyle="small_circle"
                  color="#10b981" // green
                  checked={selectedBalconies === "2"}
                  onChange={handleFlatsBalconicesChange}
                />
                <CustomeRadioBtn
                  name="flatbalconices"
                  radioValue="3"
                  radioLable="3"
                  labelHhtmlFor="balconicesOption3"
                  RadioId="balconicesOption3"
                  radioStyle="small_circle"
                  color="#10b981" // green
                  checked={selectedBalconies === "3"}
                  onChange={handleFlatsBalconicesChange}
                />
                <CustomeRadioBtn
                  name="flatbalconices"
                  radioValue="4"
                  radioLable="4"
                  labelHhtmlFor="balconicesOption4"
                  RadioId="balconicesOption4"
                  radioStyle="small_circle"
                  color="#10b981" // green
                  checked={selectedBalconies === "4"}
                  onChange={handleFlatsBalconicesChange}
                />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.section_container}>
          <div className={styles.section_heading}>
            <h3>Add Area Details</h3>
          </div>

          <div className={styles.column_options_wrapper}>
            <AreaInput
              inputPlaceholder="carpet Area"
              inputLabel="carpet Area"
            />
            <AreaInput
              inputPlaceholder="Built-up Area"
              inputLabel="Built-up Area"
            />
            <AreaInput
              inputPlaceholder="Super Built-up Area"
              inputLabel="Super Built-up Area"
            />
          </div>
        </section>

        <section className={styles.section_container}>
          <div className={styles.section_heading}>
            <h3>Add Status Details</h3>
          </div>
          <div className={styles.column_options_wrapper}>
            <div className={styles.inline_optionsBox}>
              <CustomeRadioBtn
                name="apartmentStatus"
                radioValue="furnished"
                radioLable="Furnished"
                labelHhtmlFor="furnishedOption"
                RadioId="furnishedOption"
                radioStyle="pill"
                color="#10b981" // green
                checked={slectedApartmentStatus === "furnished"}
                onChange={handleFlatsStatusChange}
              />

              <CustomeRadioBtn
                name="apartmentStatus"
                radioValue="semi-furnished"
                radioLable="Semi-Furnished"
                labelHhtmlFor="semifurnishedOption"
                RadioId="semifurnishedOption"
                radioStyle="pill"
                color="#10b981" // green
                checked={slectedApartmentStatus === "semi-furnished"}
                onChange={handleFlatsStatusChange}
              />
              <CustomeRadioBtn
                name="apartmentStatus"
                radioValue="un-furnished"
                radioLable="Un-Furnished"
                labelHhtmlFor="unfurnishedOption"
                RadioId="unfurnishedOption"
                radioStyle="pill"
                color="#10b981" // green
                checked={slectedApartmentStatus === "un-furnished"}
                onChange={handleFlatsStatusChange}
              />
            </div>
            <div className={styles.inline_optionsBox}>
              <CustomeRadioBtn
                name="apartmentAvailability"
                radioValue="ready-to-move"
                radioLable="Ready to move"
                labelHhtmlFor="ReadytomoveOption"
                RadioId="ReadytomoveOption"
                radioStyle="pill"
                color="#10b981" // green
                checked={selectedAvailability === "ready-to-move"}
                onChange={handleFlatsAvailabilityStatusChange}
              />

              <CustomeRadioBtn
                name="apartmentAvailability"
                radioValue="under-construction"
                radioLable="Under Construction"
                labelHhtmlFor="underconstructionOption"
                RadioId="underconstructionOption"
                radioStyle="pill"
                color="#10b981" // green
                checked={selectedAvailability === "under-construction"}
                onChange={handleFlatsAvailabilityStatusChange}
              />
            </div>
          </div>
        </section>

        <section className={styles.section_container}>
          <div className={styles.section_heading}>
            <h3>Add Floor Details</h3>
          </div>
          <div className={styles.column_options_wrapper}>
            <CustomeSelector
              options={totalNoFollor}
              defaultSelected="apartment"
              // onSelect={(value) => console.log("Selected:", value)}
              placeholder="Select Total Floors"
            />

            <CustomeSelector
              options={propertyNoFollor}
              defaultSelected="basement"
              // onSelect={(value) => console.log("Selected:", value)}
              placeholder="Select Property on Floors"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
