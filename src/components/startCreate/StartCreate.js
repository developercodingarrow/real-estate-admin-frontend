"use client";
import React, { useState } from "react";
import styles from "./startCreate.module.css";
import SectionHeading from "../createproject/sectionelements/SectionHeading";
import CustomeRadioBtn from "../inputsElements/CustomeRadioBtn";
import PillText from "../elements/PillText";
import CreateStaticBox from "./CreateStaticBox";
import ClickBtn from "../elements/buttons/ClickBtn";

export default function StartCreate(props) {
  const {
    pageHeading,
    optionFor,
    optionsFileds,
    propertyPurpose,
    propertySubType,
    handelSubTypeChange,
    handelpropertyPurpose,
    onNext,
  } = props;

  return (
    <div className={styles.main_container}>
      <div className={styles.inner_container}>
        <div className={styles.dynimic_column}>
          <div className={styles.page_title}>{pageHeading}</div>
          <div className={styles.section_filed_wrapper}>
            <SectionHeading sectionTitle="What are you looking ?" />
            <div className={styles.flex_column}>
              <CustomeRadioBtn
                name="propertyPurpose"
                radioValue="sell"
                radioLable="Sell"
                labelHhtmlFor="sellOption"
                RadioId="sellOption"
                radioStyle="pill"
                color="#0078db" // green
                checked={propertyPurpose === "sell"}
                onChange={handelpropertyPurpose}
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
                onChange={handelpropertyPurpose}
              />
            </div>
          </div>

          <div className={styles.section_filed_wrapper}>
            <SectionHeading sectionTitle="select the residential project" />
            <div className={styles.flex_column}>
              <PillText pillText={optionFor} pillSize="small" />
            </div>
          </div>
          <div>
            <div className={styles.options_list}>
              {optionsFileds.map((option) => (
                <CustomeRadioBtn
                  radioValue={option.value}
                  radioLable={option.label}
                  labelHhtmlFor={`${optionFor}_${option.value}`}
                  RadioId={`${optionFor}_${option.value}`}
                  radioStyle="pill"
                  color="#0078db" // green
                  size="medium_pill"
                  name={propertySubType} // Added name for grouping
                  checked={propertySubType === option.value} // Need state for this
                  onChange={handelSubTypeChange} // Need handler for this
                />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.staticBox_wrapper}>
          <CreateStaticBox boxTitle="Important Guid" />
        </div>
      </div>
      <div className={styles.section_footer}>
        <ClickBtn btnText="Processs" btnSize="large" handelClick={onNext} />
      </div>
    </div>
  );
}
