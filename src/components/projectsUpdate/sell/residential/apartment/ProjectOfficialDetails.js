import React from "react";
import styles from "./css/projecttypelocation.module.css";
import CustomeHookInput from "@/src/components/inputsElements/CustomeHookInput";
import CustomeAreaHookInput from "@/src/components/inputsElements/CustomeAreaHookInput";
export default function ProjectOfficialDetails(props) {
  const { control, errors, register } = props;
  return (
    <div className={styles.main_container}>
      <div className={styles.inner_container}>
        <section>
          <div className={styles.column_title}>Location</div>
          <div className={styles.filed_container}>
            <div className={styles.filed_wrapper}>
              <CustomeHookInput
                inputLabel="RERA NO"
                inputPlaceholder="Enter RERA NO"
                type="text"
                name="reraNo"
                control={control}
                register={register}
                rules={{
                  required: "RERA No required",
                }}
                error={errors.reraNo?.message}
              />
            </div>
            <div className={styles.filed_wrapper}>
              <CustomeAreaHookInput
                inputLabel="Basic Price"
                inputPlaceholder="Basic Price"
                type="number"
                name="basicPrice"
                control={control}
                register={register}
                rules={{
                  required: "Number of floors is required",
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
                inputLabel="posssession"
                inputPlaceholder="posssession Ex-2028"
                name="possessionDate"
                control={control}
                register={register}
                rules={{
                  required: "posssession Date is required",
                }}
                error={errors.possessionDate?.message}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
