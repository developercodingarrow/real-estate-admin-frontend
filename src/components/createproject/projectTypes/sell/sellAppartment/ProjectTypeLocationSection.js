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
import { Controller } from "react-hook-form";

export default function ProjectTypeLocationSection(props) {
  const { register, setValue, watch, errors, control } = props;
  return (
    <section className={styles.section_container}>
      <div className={styles.section_column}>
        <div className={styles.section_heading_wrapper}>Project Type</div>
        <div className={styles.section_column_wrapper}>
          <div className={styles.section_TitleColumn}>
            <div className={styles.column_fileds}>
              <Controller
                name="projectType"
                control={control}
                rules={{ required: "Project type is required" }}
                render={({ field, fieldState }) => (
                  <CustomeHookSelector
                    label="Property Type"
                    name={field.name}
                    options={projectTypeOptions}
                    value={field.value}
                    onChange={field.onChange}
                    error={fieldState.error?.message}
                  />
                )}
              />
            </div>
          </div>
          <div className={styles.section_TitleColumn}>
            <div className={styles.column_fileds}>
              <Controller
                name="projectType"
                control={control}
                rules={{ required: "Project type is required" }}
                render={({ field, fieldState }) => (
                  <CustomeHookSelector
                    label="Property Type"
                    name={field.name}
                    options={projectTypeOptions}
                    value={field.value}
                    onChange={field.onChange}
                    error={fieldState.error?.message}
                  />
                )}
              />
            </div>
          </div>

          <div className={styles.section_TitleColumn}>
            <div className={styles.column_fileds}>
              <Controller
                name="builder"
                control={control}
                rules={{ required: "Project builder is required" }}
                render={({ field, fieldState }) => (
                  <CustomeHookSelector
                    label="Project Builder"
                    name={field.name}
                    options={builderOptions}
                    value={field.value}
                    onChange={field.onChange}
                    error={fieldState.error?.message}
                  />
                )}
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
              <Controller
                name="city"
                control={control}
                rules={{ required: "Project builder is required" }}
                render={({ field, fieldState }) => (
                  <CustomeHookSelector
                    label="Project City"
                    name={field.name}
                    options={cityOptions}
                    value={field.value}
                    onChange={field.onChange}
                    error={fieldState.error?.message}
                  />
                )}
              />
            </div>
          </div>
          <div className={styles.section_TitleColumn}>
            <div className={styles.column_fileds}>
              <Controller
                name="projectType"
                control={control}
                rules={{ required: "Project location is required" }}
                render={({ field, fieldState }) => (
                  <CustomeHookSelector
                    label="Project Location"
                    name={field.name}
                    options={locationOptions}
                    value={field.value}
                    onChange={field.onChange}
                    error={fieldState.error?.message}
                  />
                )}
              />
            </div>
          </div>
          <div className={styles.section_TitleColumn}>
            <div className={styles.column_fileds}>
              <CustomeHookInput
                inputLabel="Project Address"
                inputPlaceholder="Project Address"
                type="text"
                name="address"
                control={control}
                register={register}
                rules={{
                  required: "address is required",
                }}
                error={errors.address?.message}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
