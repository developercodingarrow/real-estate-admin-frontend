"use client";
import React, { useState } from "react";
import styles from "./projectlistbar.module.css";
import CustomeRadioBtn from "../../inputsElements/CustomeRadioBtn";
export default function ProjectFillterBar(props) {
  const { filters, onFilterChange, totalCount } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilterChange({ [name]: value });
  };
  return (
    <div className={styles.main_container}>
      <div className={styles.inner_contaner}>
        <div className={styles.left_column}>
          {/* Transaction Type */}
          <div className={styles.option_radio_Wrapper}>
            <CustomeRadioBtn
              RadioId="residential"
              labelHhtmlFor="residential"
              radioValue="residential"
              radioLable="Residential"
              name="propertyCategory"
              checked={filters.propertyCategory === "residential"}
              onChange={handleChange}
              radioStyle="pill"
              size="medium"
              color="#3b82f6"
            />
            <CustomeRadioBtn
              RadioId="commercial"
              labelHhtmlFor="commercial"
              radioValue="commercial"
              radioLable="Commercial"
              name="propertyCategory"
              checked={filters.propertyCategory === "commercial"}
              onChange={handleChange}
              radioStyle="pill"
              size="medium"
              color="#3b82f6"
            />
          </div>

          {/* Looking For */}
          <div className={styles.option_radio_Wrapper}>
            <CustomeRadioBtn
              RadioId="sell"
              labelHhtmlFor="sell"
              radioValue="sell"
              radioLable="Sell"
              name="lookingFor"
              checked={filters.lookingFor === "sell"}
              onChange={handleChange}
              radioStyle="pill"
              size="medium"
              color="#3b82f6"
            />
            <CustomeRadioBtn
              RadioId="rent"
              labelHhtmlFor="rent"
              radioValue="rent"
              radioLable="Rent"
              name="lookingFor"
              checked={filters.lookingFor === "rent"}
              onChange={handleChange}
              radioStyle="pill"
              size="medium"
              color="#3b82f6"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
