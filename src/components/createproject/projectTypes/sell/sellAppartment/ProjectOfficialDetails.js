"use client";
import React, { useEffect, useState } from "react";
import styles from "./sellapartment.module.css";
import CustomeInput from "@/src/components/inputsElements/CustomeInput";
import AreaInput from "@/src/components/inputsElements/AreaInput";
import CustomeHookInput from "@/src/components/inputsElements/CustomeHookInput";
import CustomeAreaHookInput from "@/src/components/inputsElements/CustomeAreaHookInput";
export default function ProjectOfficialDetails(props) {
  const { register, setValue, watch, errors } = props;
  // read current values from RHF store

  const basicPriceValue = watch ? watch("basicPrice") ?? "" : "";
  return (
    <section className={styles.section_container}>
      {" "}
      <div className={styles.section_column}>
        {" "}
        <div className={styles.section_heading_wrapper}>
          Project official Details
        </div>
        <div className={styles.section_column_wrapper}>
          <div className={styles.section_TitleColumn}>
            <div className={styles.column_fileds}>
              <CustomeHookInput
                inputLabel="RERA NO"
                inputPlaceholder="Enter RERA NO"
                name="reraNo"
                register={register}
                rules={{
                  required: "RERA No required",
                }}
                error={errors.reraNo?.message}
              />
            </div>
          </div>
          <div className={styles.section_TitleColumn}>
            <div className={styles.column_fileds}>
              <CustomeHookInput
                inputLabel="posssession"
                inputPlaceholder="posssession Ex-2028"
                name="posssession"
                register={register}
                rules={{
                  required: "posssession Date is required",
                }}
                error={errors.posssession?.message}
              />
            </div>
          </div>
          <div className={styles.section_TitleColumn}>
            <div className={styles.column_fileds}>
              <CustomeAreaHookInput
                inputLabel="posssession"
                inputPlaceholder="Basic Price"
                type="number"
                name="basicPrice"
                register={register}
                rules={{
                  required: "Number of floors is required",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Only numbers are allowed",
                  },
                }}
                error={errors.basicPrice?.message}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
