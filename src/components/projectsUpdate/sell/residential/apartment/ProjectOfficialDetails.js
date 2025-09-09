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
          <div className={styles.column_title}>Official Details</div>
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
                  required: "Basic Price is required",
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
                  required: "Total Number of Floor is required",
                }}
                error={errors.noOfFloors?.message}
              />
            </div>
            <div className={styles.filed_wrapper}>
              <CustomeHookInput
                inputLabel="Total no Of Units"
                inputPlaceholder="No Of Units"
                type="number"
                name="noOfUnits"
                control={control}
                register={register}
                rules={{
                  required: "units number is required",
                }}
                error={errors.noOfUnits?.message}
              />
            </div>
            <div className={styles.filed_wrapper}>
              <CustomeHookInput
                inputLabel="Unit Type"
                inputPlaceholder="unitType Ex-3bhk,4bhk"
                name="unitType"
                type="text"
                control={control}
                register={register}
                rules={{
                  required: "Unit Type is required",
                }}
                error={errors.unitType?.message}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
