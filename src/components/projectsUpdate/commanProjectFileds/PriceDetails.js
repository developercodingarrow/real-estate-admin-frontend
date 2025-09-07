import React from "react";
import styles from "./css/projectlocation.module.css";
import CustomeHookInput from "../../inputsElements/CustomeHookInput";
import CustomeHookSelector from "../../inputsElements/CustomeHookSelector";
import { cityOptions, locationOptions } from "@/src/jsonData/locationData";
import { Controller } from "react-hook-form";

export default function PriceDetails(props) {
  const { control, errors, register } = props; // <-- now use control instead of register
  return (
    <div className={styles.main_container}>
      <div className={styles.inner_container}>
        <section>
          <div className={styles.column_title}>Location</div>
          <div className={styles.filed_container}>
            <div className={styles.filed_wrapper}>
              <CustomeHookInput
                inputLabel="Expected Rent"
                inputPlaceholder="Expected Rent/monthly"
                type="number"
                name="rent"
                control={control}
                register={register}
                rules={{
                  required: "Rent is required",
                }}
                error={errors.rent?.message}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
