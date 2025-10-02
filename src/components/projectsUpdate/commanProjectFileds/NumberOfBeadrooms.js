import React from "react";
import styles from "./css/projectlocation.module.css";
import { Controller } from "react-hook-form";
import CustomeHookRadioBtn from "../../inputsElements/CustomeHookRadioBtn";

export default function NumberOfBeadrooms(props) {
  const { control, errors, register, sectionTitle, name } = props;

  return (
    <div className={styles.main_container}>
      <div className={styles.inner_container}>
        <section>
          <div className={styles.column_title}>{sectionTitle} </div>
          <div className={styles.filed_container}>
            <div className={styles.filed_wrapper}>
              <CustomeHookRadioBtn
                control={control}
                name="a"
                rules={{ required: "Please select one" }}
                options={[
                  { value: "1", label: "1" },
                  { value: "2", label: "2" },
                  { value: "3", label: "3" },
                ]}
                radioStyle="pill"
                size="medium"
                color="#0078db"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
