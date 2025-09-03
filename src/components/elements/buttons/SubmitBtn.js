import React from "react";
import styles from "./css/btn.module.css";
import BtnLoading from "../../loading/BtnLoading";
export default function SubmitBtn(props) {
  const {
    btnText,
    btnLoading = false, // Default is not loading
    size = "medium", // Default size
    btnType = "fill_type_btn",
    fullWidth = false,
    disabledBtn = false,
  } = props;
  return (
    <div className={`${styles[size]}`}>
      <button
        type="submit"
        className={`${styles.btn_style} ${styles[btnType]} ${styles[size]} ${
          fullWidth ? styles.fullWidth : ""
        } ${btnLoading ? "loading" : ""}`}
        disabled={disabledBtn || btnLoading} // Disable button during loading
      >
        {btnLoading ? <BtnLoading /> : btnText}
      </button>
    </div>
  );
}
