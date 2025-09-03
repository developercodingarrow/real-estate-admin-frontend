import React from "react";
import styles from "./css/projectlocation.module.css";
import CustomeAreaHookInput from "../../inputsElements/CustomeAreaHookInput";
import CustomeHookInput from "../../inputsElements/CustomeHookInput";

export default function PlotArea(props) {
  const { register, setValue, watch, errors, control } = props;
  return (
    <div className={styles.main_container}>
      <div className={styles.inner_container}>
        <section>
          <div className={styles.column_title}>
            Property Simension/Area Details
          </div>
          <div className={styles.filed_container}>
            <div className={styles.filed_wrapper}>
              <CustomeAreaHookInput
                inputLabel="Plot Area"
                inputPlaceholder="Plot Area"
                type="number"
                name="plotArea"
                control={control}
                register={register}
                rules={{
                  required: "Number of floors is required",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Only numbers are allowed",
                  },
                }}
                error={errors.plotArea?.message}
              />
            </div>
            <div className={styles.filed_wrapper}>
              <CustomeHookInput
                inputLabel="Plot Length"
                inputPlaceholder="Length of plot"
                type="number"
                name="plotLength"
                control={control}
                register={register}
                rules={{
                  required: "address is required",
                }}
                error={errors.plotLength?.message}
              />
            </div>
            <div className={styles.filed_wrapper}>
              <CustomeHookInput
                inputLabel="plot Width"
                inputPlaceholder="width of plot"
                type="number"
                name="plotWidth"
                control={control}
                register={register}
                rules={{
                  required: "address is required",
                }}
                error={errors.plotWidth?.message}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
