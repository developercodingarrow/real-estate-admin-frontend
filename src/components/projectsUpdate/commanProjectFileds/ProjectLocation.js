"use client";
import React, { useContext } from "react";
import styles from "./css/projectlocation.module.css";
import CustomeHookInput from "../../inputsElements/CustomeHookInput";
import CustomeHookSelector from "../../inputsElements/CustomeHookSelector";
import { cityOptions, locationOptions } from "@/src/jsonData/locationData";
import { Controller } from "react-hook-form";
import { ApiDataContext } from "@/src/_contextApi/ApiDataContextProvider";

export default function ProjectLocation(props) {
  const { control, errors, register } = props; // <-- now use control instead of register
  const { apiCitiesList, apiLocationList } = useContext(ApiDataContext);
  return (
    <div className={styles.main_container}>
      <div className={styles.inner_container}>
        <section>
          <div className={styles.column_title}>Location</div>
          <div className={styles.filed_container}>
            <div className={styles.filed_wrapper}>
              <Controller
                name="city"
                control={control}
                rules={{ required: "Project city is required" }}
                render={({ field, fieldState }) => (
                  <CustomeHookSelector
                    label="Project City"
                    name={field.name}
                    options={apiCitiesList}
                    value={field.value}
                    onChange={field.onChange}
                    error={fieldState.error?.message}
                  />
                )}
              />
            </div>
            <div className={styles.filed_wrapper}>
              <Controller
                name="location"
                control={control}
                rules={{ required: "Project location is required" }}
                render={({ field, fieldState }) => (
                  <CustomeHookSelector
                    label="Project Location"
                    name={field.name}
                    options={apiLocationList}
                    value={field.value}
                    onChange={field.onChange}
                    error={fieldState.error?.message}
                  />
                )}
              />
            </div>
            <div className={styles.filed_wrapper}>
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
        </section>
      </div>
    </div>
  );
}
