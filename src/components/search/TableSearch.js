import React from "react";
import styles from "./tablesearch.module.css";
import { IoSearch } from "../ApplicationIcons";
export default function TableSearch(props) {
  const { searchField, placeholder, searchHandle } = props;
  return (
    <div className={styles.search_Maincontainer}>
      <div className={styles.search_input_wrapper}>
        <input
          type="text"
          placeholder={placeholder}
          className={styles.search_inputStyle}
          onChange={(e) => searchHandle(e.target.value, searchField)}
        />
      </div>
      <div className={styles.search_iconBox}>
        <IoSearch />
      </div>
    </div>
  );
}
