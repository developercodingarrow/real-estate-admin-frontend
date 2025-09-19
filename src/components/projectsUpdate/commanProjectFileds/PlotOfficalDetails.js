import React from "react";
import CustomeAreaHookInput from "../../inputsElements/CustomeAreaHookInput";
import CustomeHookInput from "../../inputsElements/CustomeHookInput";
import styles from "./css/projectlocation.module.css";

export default function PlotOfficalDetails(props) {
  const { control, errors, register } = props;
  return (
    <div className={styles.main_container}>
      <div className={styles.inner_container}>
        <section>
          <div className={styles.column_title}>Plot official Details</div>
          <div className={styles.filed_container}>
            <div className={styles.filed_wrapper}>
              <CustomeAreaHookInput
                inputLabel="Basic Price"
                inputPlaceholder="Basic Price"
                type="number"
                name="basicPrice"
                control={control}
                register={register}
                rules={{
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Only numbers are allowed",
                  },
                }}
                error={errors.basicPrice?.message}
              />
            </div>

            <div className={styles.filed_wrapper}>
              <CustomeHookInput
                inputLabel="Starts Price"
                inputPlaceholder="prefic with value cr,lakh"
                type="text"
                name="StartsPrice"
                control={control}
                register={register}
                error={errors.StartsPrice?.message}
                rules={{
                  required: "Starts Price required",
                }}
              />
            </div>

            <div className={styles.filed_wrapper}>
              <CustomeHookInput
                inputLabel="posssession"
                inputPlaceholder="posssession Ex-2028"
                name="possessionDate"
                control={control}
                register={register}
                rules={{}}
                error={errors.possessionDate?.message}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
