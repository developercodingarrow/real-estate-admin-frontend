import React from "react";
import styles from "./tabbar.module.css";
export default function TabBar() {
  const tabOptions = [
    {
      optionName: "All",
    },
    {
      optionName: "Apartment",
    },
    {
      optionName: "House",
    },
    {
      optionName: "Plots",
    },

    {
      optionName: "Industrial",
    },
    {
      optionName: "office",
    },
    {
      optionName: "office",
    },
    {
      optionName: "office",
    },
  ];
  return (
    <div className={styles.tab_conatiner}>
      <div className={styles.inner_conatiner}>
        <div className={styles.options_wrapper}>
          {tabOptions.map((item, index) => {
            return <div className={styles.optionTab}>{item.optionName}</div>;
          })}
        </div>
      </div>
    </div>
  );
}
