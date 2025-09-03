import React from "react";
import styles from "./css/projectlocation.module.css";
import HookRadiobtn from "../../inputsElements/HookRadiobtn";
export default function RadioNumbers(props) {
  const { sectionTitle, control, name, options } = props;
  return (
    <div className={styles.main_container}>
      <div className={styles.inner_container}>
        <section>
          <div className={styles.column_title}>{sectionTitle} </div>
          <div className={styles.filed_container}>
            <div className={styles.filed_wrapper}>
              <HookRadiobtn control={control} name={name} options={options} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
