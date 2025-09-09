import React from "react";
import styles from "./css/projectlocation.module.css";
import { Controller } from "react-hook-form";
import CustomeHookSelector from "../../inputsElements/CustomeHookSelector";
import { propertyOnFloorOptions } from "@/src/jsonData/projectFiledsData";
import CustomeHookInput from "../../inputsElements/CustomeHookInput";

export default function FloorDetails(props) {
  const { control, errors, register } = props; // <-- now use control instead of register
  return (
    <div className={styles.main_container}>
      <div className={styles.inner_container}>
        <section>
          <div className={styles.column_title}>Floor Details</div>
          <div className={styles.filed_container}>
            <div className={styles.filed_wrapper}>
              <CustomeHookInput
                inputLabel="Total no of Floors"
                inputPlaceholder="Total Floors"
                type="number"
                name="noOfFloors"
                control={control}
                register={register}
                rules={{
                  required: "Floors is required",
                }}
                error={errors.noOfFloors?.message}
              />
            </div>
            <div className={styles.filed_wrapper}>
              <Controller
                name="propertyOnFloor"
                control={control}
                rules={{ required: "Project builder is required" }}
                render={({ field, fieldState }) => (
                  <CustomeHookSelector
                    label="Property on Floor"
                    name={field.name}
                    options={propertyOnFloorOptions}
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
