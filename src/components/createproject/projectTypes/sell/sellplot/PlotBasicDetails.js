"use client";
import React, { useState } from "react";
import styles from "../sellAppartment/sellapartment.module.css";
import AreaInput from "@/src/components/inputsElements/AreaInput";
import CustomeInput from "@/src/components/inputsElements/CustomeInput";
import CustomeRadioBtn from "@/src/components/inputsElements/CustomeRadioBtn";

export default function PlotBasicDetails() {
  const [plotOpenside, setplotOpenside] = useState("");
  const [plotPossion, setplotPossion] = useState("");
  const handelPlotOpensideChnage = (e) => {
    console.log(e.target.value);
    setplotOpenside(e.target.value);
  };

  const handelPlotPossion = (e) => {
    console.log(e.target.value);
    setplotPossion(e.target.value);
  };
  return (
    <section className={styles.section_container}>
      <div className={styles.section_column}>
        <div className={styles.section_heading_wrapper}>Plot Basic Details</div>
        <div className={styles.section_column_wrapper}>
          <div className={styles.section_TitleColumn}>
            <div className={styles.column_title}>No of Open side</div>
            <div className={styles.inline_column_fileds}>
              <CustomeRadioBtn
                name="plotOpenside"
                radioValue="1"
                radioLable="1"
                labelHhtmlFor="plotOpensideOption1"
                RadioId="plotOpensideOption1"
                radioStyle="small_circle"
                color="#0078db" // green
                checked={plotOpenside === "1"}
                onChange={handelPlotOpensideChnage}
              />

              <CustomeRadioBtn
                name="plotOpenside"
                radioValue="2"
                radioLable="2"
                labelHhtmlFor="plotOpensideOption2"
                RadioId="plotOpensideOption2"
                radioStyle="small_circle"
                color="#0078db" // green
                checked={plotOpenside === "2"}
                onChange={handelPlotOpensideChnage}
              />
              <CustomeRadioBtn
                name="plotOpenside"
                radioValue="3"
                radioLable="3"
                labelHhtmlFor="plotOpensideOption3"
                RadioId="plotOpensideOption3"
                radioStyle="small_circle"
                color="#0078db" // green
                checked={plotOpenside === "3"}
                onChange={handelPlotOpensideChnage}
              />
              <CustomeRadioBtn
                name="plotOpenside"
                radioValue="4"
                radioLable="4"
                labelHhtmlFor="plotOpensideOption4"
                RadioId="plotOpensideOption4"
                radioStyle="small_circle"
                color="#0078db" // green
                checked={plotOpenside === "4"}
                onChange={handelPlotOpensideChnage}
              />
            </div>
          </div>
          <div className={styles.section_TitleColumn}>
            <div className={styles.column_title}>Possession By</div>
            <div className={styles.inline_column_fileds}>
              <CustomeRadioBtn
                name="plotPossion"
                radioValue="immediate"
                radioLable="Immediate"
                labelHhtmlFor="plotImmediatelOption"
                RadioId="plotImmediatelOption"
                radioStyle="pill"
                color="#0078db" // green
                checked={plotPossion === "immediate"}
                onChange={handelPlotPossion}
              />
              <CustomeRadioBtn
                name="plotPossion"
                radioValue="3"
                radioLable="Within 3 Months"
                labelHhtmlFor="plot3MonthsOption"
                RadioId="plot3MonthsOption"
                radioStyle="pill"
                color="#0078db" // green
                checked={plotPossion === "3"}
                onChange={handelPlotPossion}
              />
              <CustomeRadioBtn
                name="plotPossion"
                radioValue="6"
                radioLable="Within 6 Months"
                labelHhtmlFor="plot6MonthsOption"
                RadioId="plot6MonthsOption"
                radioStyle="pill"
                color="#0078db" // green
                checked={plotPossion === "6"}
                onChange={handelPlotPossion}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
