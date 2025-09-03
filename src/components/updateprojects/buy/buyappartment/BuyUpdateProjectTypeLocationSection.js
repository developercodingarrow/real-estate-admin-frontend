import React from "react";
import styles from "../../updatecomponentsStyles.module.css";
import CustomeHookSelector from "@/src/components/inputsElements/CustomeHookSelector";
import { cityOptions, locationOptions } from "@/src/jsonData/locationData";
import {
  projectStatusOptions,
  projectTypeOptions,
  builderOptions,
} from "@/src/jsonData/sellApartmentData";

import { Controller } from "react-hook-form";
import CustomeHookInput from "@/src/components/inputsElements/CustomeHookInput";

export default function BuyUpdateProjectTypeLocationSection(props) {
  const { control, errors, register } = props; // <-- now use control instead of register

  return (
    <section className={styles.section_container}>
      <div className={styles.section_column}>
        <div className={styles.section_heading_wrapper}>Project Type</div>
        <div className={styles.section_column_wrapper}>
          <div className={styles.section_TitleColumn}>
            <div className={styles.column_fileds}>
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
                name="location"
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
