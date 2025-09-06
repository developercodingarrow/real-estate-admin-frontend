"use client";
import React, { useState } from "react";
import styles from "./css/projectlocation.module.css";
import { Controller } from "react-hook-form";
import { propertyOnFloorOptions } from "@/src/jsonData/projectFiledsData";
import CustomeHookInput from "../../inputsElements/CustomeHookInput";

export default function OfficeSetupDetails(props) {
  const { control, errors, register } = props; // <-- now use control instead of register
  return (
    <div className={styles.main_container}>
      <div className={styles.inner_container}>
        <section>
          <div className={styles.column_title}>Floor Details</div>
          <div className={styles.filed_container}>
            <div className={styles.filed_wrapper}>
              <CustomeHookInput
                inputLabel="Minimium. no of Seats"
                inputPlaceholder="Mini. no of Seats"
                type="number"
                name="officeMiniSeats"
                control={control}
                register={register}
                rules={{
                  required: "address is required",
                }}
                error={errors.address?.message}
              />
            </div>
            <div className={styles.filed_wrapper}>
              <CustomeHookInput
                inputLabel="Number of Cabines"
                inputPlaceholder="No. of Cabines"
                type="number"
                name="officeCabines"
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
