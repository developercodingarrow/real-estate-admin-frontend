import React from "react";
import styles from "./css/projectlocation.module.css";
import CustomeAreaHookInput from "../../inputsElements/CustomeAreaHookInput";

export default function ProjectArea(props) {
  const { register, setValue, watch, errors, control } = props;
  return (
    <div className={styles.main_container}>
      <div className={styles.inner_container}>
        <section>
          <div className={styles.column_title}>Area</div>
          <div className={styles.filed_container}>
            <div className={styles.filed_wrapper}>
              <CustomeAreaHookInput
                inputLabel="project Built Up Area"
                inputPlaceholder="Built-up-area"
                type="number"
                name="builtUpArea"
                control={control}
                register={register}
                rules={{
                  // required: "builtUp Area is required",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Only numbers are allowed",
                  },
                }}
                error={errors.builtUpArea?.message}
              />
            </div>
            <div className={styles.filed_wrapper}>
              <CustomeAreaHookInput
                inputLabel="project Carpet Area"
                inputPlaceholder="carpetArea-area"
                type="number"
                name="carpetArea"
                control={control}
                register={register}
                rules={{
                  // required: "carpetArea is required",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Only numbers are allowed",
                  },
                }}
                error={errors.carpetArea?.message}
              />
            </div>
            <div className={styles.filed_wrapper}>
              <CustomeAreaHookInput
                inputLabel="  Project Super Built Up Area"
                inputPlaceholder="super built-up-area"
                type="number"
                name="superBuiltUpArea"
                control={control}
                register={register}
                rules={{
                  // required: "Super BuiltUp Area is required",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Only numbers are allowed",
                  },
                }}
                error={errors.superBuiltUpArea?.message}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
