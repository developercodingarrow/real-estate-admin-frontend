"use client";
import React, { useEffect, useState } from "react";
import styles from "./sellapartment.module.css";

import CustomeAreaHookInput from "@/src/components/inputsElements/CustomeAreaHookInput";

export default function ProjectAreaSection(props) {
  const { register, setValue, watch, errors, control } = props;
  // read current values from RHF store

  return (
    <section className={styles.section_container}>
      <div className={styles.section_column}>
        <div className={styles.section_heading_wrapper}>Project Area</div>
        <div className={styles.section_column_wrapper}>
          <div className={styles.section_TitleColumn}>
            <div className={styles.column_fileds}>
              <CustomeAreaHookInput
                inputLabel="project Built Up Area"
                inputPlaceholder="Built-up-area"
                type="number"
                name="builtUpArea"
                control={control}
                register={register}
                rules={{
                  required: "Number of floors is required",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Only numbers are allowed",
                  },
                }}
                error={errors.BuiltUpArea?.message}
              />
            </div>
          </div>
          <div className={styles.section_TitleColumn}>
            <div className={styles.column_fileds}>
              <CustomeAreaHookInput
                inputLabel="project Carpet Area"
                inputPlaceholder="carpetArea-area"
                type="number"
                name="carpetArea"
                control={control}
                register={register}
                rules={{
                  required: "carpetArea is required",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Only numbers are allowed",
                  },
                }}
                error={errors.carpetArea?.message}
              />
            </div>
          </div>
          <div className={styles.section_TitleColumn}>
            <div className={styles.column_fileds}>
              <CustomeAreaHookInput
                inputLabel="  Project Super Built Up Area"
                inputPlaceholder="super built-up-area"
                type="number"
                name="SuperBuiltUpArea"
                control={control}
                register={register}
                rules={{
                  required: "Super BuiltUp Area is required",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Only numbers are allowed",
                  },
                }}
                error={errors.SuperBuiltUpArea?.message}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
