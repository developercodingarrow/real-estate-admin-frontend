"use client";
import React, { useContext } from "react";
import styles from "./css/projecttypelocation.module.css";
import {
  projectStatusOptions,
  projectTypeOptions,
} from "@/src/jsonData/sellApartmentData";
import { Controller } from "react-hook-form";
import CustomeHookSelector from "@/src/components/inputsElements/CustomeHookSelector";
import { ApiDataContext } from "@/src/_contextApi/ApiDataContextProvider";

export default function ProjectType(props) {
  const { control, errors, register } = props; // <-- now use control instead of register
  const { apiBuilderList } = useContext(ApiDataContext);

  return (
    <div className={styles.main_container}>
      <div className={styles.inner_container}>
        <section>
          <div className={styles.column_title}>Project Type</div>
          <div className={styles.filed_container}>
            <div className={styles.filed_wrapper}>
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
            <div className={styles.filed_wrapper}>
              <Controller
                name="projectStatus"
                control={control}
                rules={{ required: "Project status is required" }}
                render={({ field, fieldState }) => (
                  <CustomeHookSelector
                    label="Project Status"
                    name={field.name}
                    options={projectStatusOptions}
                    value={field.value}
                    onChange={field.onChange}
                    error={fieldState.error?.message}
                  />
                )}
              />
            </div>
            <div className={styles.filed_wrapper}>
              <Controller
                name="builder"
                control={control}
                rules={{ required: "Project builder is required" }}
                render={({ field, fieldState }) => (
                  <CustomeHookSelector
                    label="Project Builder"
                    name={field.name}
                    options={apiBuilderList}
                    value={field.value}
                    onChange={field.onChange}
                    error={fieldState.error?.message}
                  />
                )}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
