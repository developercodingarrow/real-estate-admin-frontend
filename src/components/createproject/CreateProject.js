"use client";
import React, { useState } from "react";
import styles from "./createproject.module.css";
import CustomeRadioBtn from "../inputsElements/CustomeRadioBtn";
import ApartmentOptions from "./projectsTypeOptions/ApartmentOptions";
import SectionHeading from "./sectionelements/SectionHeading";
import SellApartment from "./projectTypes/sell/sellAppartment/SellApartment";
import SellPlot from "./projectTypes/sell/sellplot/SellPlot";
import SellIndependentHouse from "./projectTypes/sell/sellindependenthouse/SellIndependentHouse";
import SellVilla from "./projectTypes/sell/sellVill/SellVilla";
import SellFarmhouse from "./projectTypes/sell/sellFarmhouse/SellFarmhouse";
import SellBuilderFloor from "./projectTypes/sell/sellBuilderFloor/SellBuilderFloor";
export default function CreateProject() {
  const [selectedOption, setSelectedOption] = useState("residential");
  const [propertyPurpose, setpropertyPurpose] = useState("sell");
  const [propertySubType, setPropertySubType] = useState("");
  const [sectionSubType, setsectionSubType] = useState("");

  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handlePropertyPuposeChange = (e) => {
    setpropertyPurpose(e.target.value);
  };

  const handleSubTypeChange = (e) => {
    setPropertySubType(e.target.value);
  };

  const handleProcess = () => {
    setsectionSubType(propertySubType);
  };

  // Options for each category
  const residentialOptions = [
    { value: "apartment", label: "Apartment/Flat" },
    { value: "house", label: "House" },
    { value: "villa", label: "Villa" },
    { value: "plot", label: "plot/Land" },
    { value: "builder-floor", label: "Independent/Builder Floor" },
    { value: "farmhouse", label: "Farmhouse" },
  ];

  const commercialOptions = [
    { value: "office", label: "Office Space" },
    { value: "retail", label: "Retail" },
    { value: "insustry", label: "Insustry" },
  ];

  const getpropertySubTypeOptions = (propertySubType) => {
    switch (propertySubType) {
      case "apartment":
        return <SellApartment />;
      case "house":
        return <SellIndependentHouse />;
      case "villa":
        return <SellVilla />;
      case "plot":
        return <SellPlot />;
      case "farmhouse":
        return <SellFarmhouse />;
      case "builder-floor":
        return <SellBuilderFloor />;
      case "industry":
        return "Industrial Property";
      default:
        return "Please select a property type";
    }
  };
  return (
    <div className={styles.main_container}>
      <div className={styles.inner_container}>
        <section className={styles.project_basic_details_section}>
          <div className={styles.section_heading}>
            <h2>welcome back admiin, Fill Out Project basic details</h2>
          </div>
          <div className={styles.option_section}>
            <SectionHeading sectionTitle="i,m looking to" />
            <div className={styles.single_block}>
              <div className={styles.inline_radio_options_wrapper}>
                <CustomeRadioBtn
                  name="propertyPurpose"
                  radioValue="sell"
                  radioLable="Sell"
                  labelHhtmlFor="sellOption"
                  RadioId="sellOption"
                  radioStyle="pill"
                  color="#0078db" // green
                  checked={propertyPurpose === "sell"}
                  onChange={handlePropertyPuposeChange}
                />

                <CustomeRadioBtn
                  name="propertyPurpose"
                  radioValue="rent"
                  radioLable="Rent/Lease"
                  labelHhtmlFor="rentOption"
                  RadioId="rentOption"
                  radioStyle="pill"
                  color="#0078db" // green
                  checked={propertyPurpose === "rent"}
                  onChange={handlePropertyPuposeChange}
                />
              </div>
            </div>
          </div>

          <div className={styles.option_section}>
            <SectionHeading sectionTitle="What Kind of Property do you have ?" />
            <div className={styles.single_block}>
              <div className={styles.inline_radio_options_wrapper}>
                <CustomeRadioBtn
                  radioValue="residential"
                  radioLable="Residential"
                  labelHhtmlFor="residentialOption"
                  RadioId="residentialOption"
                  radioStyle="circle_border"
                  checked={selectedOption === "residential"}
                  onChange={handleRadioChange}
                />
                <CustomeRadioBtn
                  radioValue="commercial"
                  radioLable="Commercial"
                  labelHhtmlFor="commercialOption"
                  RadioId="commercialOption"
                  radioStyle="circle_border"
                  color="#0078db" // green
                  checked={selectedOption === "commercial"}
                  onChange={handleRadioChange}
                />
              </div>
            </div>

            <div className={styles.single_block}>
              <div>
                {selectedOption === "residential" ? (
                  <div className={styles.options_list}>
                    {residentialOptions.map((option) => (
                      <CustomeRadioBtn
                        radioValue={option.value}
                        radioLable={option.label}
                        labelHhtmlFor={`residential_${option.value}`}
                        RadioId={`residential_${option.value}`}
                        radioStyle="pill"
                        color="#0078db" // green
                        size="medium_pill"
                        name="propertySubType" // Added name for grouping
                        checked={propertySubType === option.value} // Need state for this
                        onChange={handleSubTypeChange} // Need handler for this
                      />
                    ))}
                  </div>
                ) : (
                  <div className={styles.options_list}>
                    {commercialOptions.map((option) => (
                      <CustomeRadioBtn
                        radioValue={option.value}
                        radioLable={option.label}
                        labelHhtmlFor={`commercial_${option.value}`}
                        RadioId={`commercial_${option.value}`}
                        radioStyle="pill"
                        color="#10b981" // green
                        size="medium_pill"
                        name="propertySubType" // Added name for grouping
                        checked={propertySubType === option.value} // Need state for this
                        onChange={handleSubTypeChange} // Need handler for this
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className={styles.section_btn_wrapper}>
            <button onClick={handleProcess}>Process</button>
          </div>
        </section>

        <section className={styles.slected_propertyType}>
          {getpropertySubTypeOptions(propertySubType)}
        </section>
      </div>
    </div>
  );
}
