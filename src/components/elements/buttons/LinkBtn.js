"use client";
import React from "react";
import styles from "./css/btn.module.css";
import Link from "next/link";

export default function LinkBtn(props) {
  const {
    btnText,
    size = "medium", // Default size
    btnType = "fill_type_btn",
    fullWidth = false,
    linkPath = "/",
  } = props;
  return (
    <Link
      href={`${linkPath}`}
      className={`${styles.btn_style} ${styles[btnType]} ${styles[size]} ${
        fullWidth ? styles.fullWidth : ""
      }`}
    >
      {btnText}
    </Link>
  );
}
