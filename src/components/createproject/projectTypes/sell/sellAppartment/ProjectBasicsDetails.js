import React from "react";
import styles from "./sellapartment.module.css";
import CustomeInput from "@/src/components/inputsElements/CustomeInput";
import CustomeHookInput from "@/src/components/inputsElements/CustomeHookInput";

export default function ProjectBasicsDetails(props) {
  const { register, setValue, watch, errors } = props;

  const unitTypesValue = watch ? watch("unittypes") ?? "" : "";

  return (
    <section className={styles.section_container}>
      {" "}
      <div className={styles.section_column}>
        {" "}
        <div className={styles.section_heading_wrapper}>
          Project Basics Details
        </div>
        <div className={styles.section_column_wrapper}>
          <div className={styles.section_TitleColumn}>
            <div className={styles.column_fileds}>
              <CustomeHookInput
                inputLabel="No of Floors..."
                inputPlaceholder="Ex - 20"
                name="floors"
                type="number"
                register={register}
                rules={{
                  required: "Number of floors is required",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Only numbers are allowed",
                  },
                }}
                error={errors.floors?.message}
              />
            </div>
          </div>
          <div className={styles.section_TitleColumn}>
            <div className={styles.column_fileds}>
              <CustomeHookInput
                inputLabel="No of Units"
                inputPlaceholder="Ex - 800"
                name="units"
                type="number"
                register={register}
                rules={{
                  required: "Number of units is required",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Only numbers are allowed",
                  },
                }}
                error={errors.units?.message}
              />
            </div>
          </div>
          <div className={styles.section_TitleColumn}>
            <div className={styles.column_fileds}>
              <CustomeHookInput
                inputLabel="Types of Units"
                inputPlaceholder="Ex - 2BHK, 3BHK+3T"
                name="unittypes"
                register={register}
                rules={{
                  required: "Unit types are required",
                }}
                error={errors.unittypes?.message}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
