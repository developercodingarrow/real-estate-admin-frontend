"use client";
import React, { useState } from "react";
import styles from "./projectlistbar.module.css";
import CustomeRadioBtn from "../../inputsElements/CustomeRadioBtn";

export default function CategoryFilter(props) {
  const { selected, onChange } = props;
  return (
    <div className={styles.option_radio_Wrapper}>
      <CustomeRadioBtn
        RadioId="residential"
        labelHhtmlFor="residential"
        radioValue="residential"
        radioLable="Residential"
        name="transactionType"
        checked={selected === "residential"}
        onChange={handleChange}
        radioStyle="pill" // "pill" | "square" | etc. (depends on CSS)
        size="medium" // "small" | "medium" | "large"
        color="#3b82f6" // Tailwind green-600
      />

      <CustomeRadioBtn
        RadioId="commercial"
        labelHhtmlFor="commercial"
        radioValue="commercial"
        radioLable="Commercial"
        name="transactionType"
        checked={selected === "commercial"}
        onChange={handleChange}
        radioStyle="pill"
        size="medium"
        color="#3b82f6" // Tailwind blue-500
      />
    </div>
  );
}
