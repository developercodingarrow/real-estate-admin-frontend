"use client";
import React from "react";
import styles from "./css/buttons.module.css";
import BtnLoading from "../../loading/BtnLoading";
export default function ClickBtn(props) {
  const {
    btnText = "update",
    btnLoading = false, // Default is not loading
    size = "medium", // Default size
    btnType = "fill_type_btn",
    fullWidth = false, // Default is not full width
    handelClick,
    disabledBtn = false,
  } = props;

  const handelClickBtn = () => {
    if (!disabledBtn) {
      handelClick();
    }
  };

  return (
    <div className={styles.btn_wrapper}>
      <button
        type="button"
        className={`${styles.btn_style} ${styles[btnType]} ${styles[size]} ${
          fullWidth ? styles.fullWidth : ""
        } ${btnLoading ? "loading" : ""}`}
        disabled={disabledBtn || btnLoading} // Disable button during loading
        onClick={handelClickBtn}
      >
        {btnLoading ? <BtnLoading /> : btnText}
      </button>
    </div>
  );
}
