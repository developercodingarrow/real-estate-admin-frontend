"use client";
import React, { useState, useEffect } from "react";
import styles from "./sellapartment.module.css";
import { cityOptions, locationOptions } from "@/src/jsonData/locationData";
import {
  projectStatusOptions,
  projectTypeOptions,
  builderOptions,
} from "@/src/jsonData/sellApartmentData";
import CustomeHookSelector from "@/src/components/inputsElements/CustomeHookSelector";
import CustomeHookInput from "@/src/components/inputsElements/CustomeHookInput";

export default function ProjectTypeLocationSection(props) {
  const { register, setValue, watch, errors } = props;

  return (
    <section className={styles.section_container}>
      <div className={styles.section_column}>
        <div className={styles.section_heading_wrapper}>Project Type</div>
        <div className={styles.section_column_wrapper}>
          <div className={styles.section_TitleColumn}>
            <div className={styles.column_fileds}>
              <CustomeHookSelector
                label="Project Status"
                name="projectStatus"
                options={projectStatusOptions}
                register={register}
                rules={{ required: "Project status is required" }}
                error={errors.projectStatus?.message}
              />
            </div>
          </div>
          <div className={styles.section_TitleColumn}>
            <div className={styles.column_fileds}>
              <CustomeHookSelector
                label="Project Type"
                name="projectType"
                options={projectTypeOptions}
                register={register}
                rules={{ required: "Project type is required" }}
                error={errors.projectType?.message}
              />
            </div>
          </div>

          <div className={styles.section_TitleColumn}>
            <div className={styles.column_fileds}>
              <CustomeHookSelector
                label="Project Builder"
                name="projectBuilder"
                options={builderOptions}
                register={register}
                rules={{ required: "Project builder is required" }}
                error={errors.projectBuilder?.message}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section_column}>
        <div className={styles.section_heading_wrapper}>Project Location</div>
        <div className={styles.section_column_wrapper}>
          <div className={styles.section_TitleColumn}>
            <div className={styles.column_fileds}>
              <CustomeHookSelector
                label="Project City"
                name="city"
                options={cityOptions}
                register={register}
                rules={{ required: "Project city is required" }}
                error={errors.city?.message}
              />
            </div>
          </div>
          <div className={styles.section_TitleColumn}>
            <div className={styles.column_fileds}>
              <CustomeHookSelector
                label="Project Location"
                name="location"
                options={locationOptions}
                register={register}
                rules={{ required: "Project location is required" }}
                error={errors.location?.message}
              />
            </div>
          </div>
          <div className={styles.section_TitleColumn}>
            <div className={styles.column_fileds}>
              <CustomeHookInput
                inputLabel="Project Address"
                inputPlaceholder="Enter project Address"
                name="address"
                register={register}
                rules={{ required: "Address is required" }}
                error={errors.address?.message}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
