"use client";
import React, { useContext } from "react";
import styles from "./asidebar.module.css";
import logo from "../../../public/web-img/Company-Logo-500X500-removebg-preview.png";
import Image from "next/image";
import { IoReorderThree } from "../ApplicationIcons";
import { AppContext } from "@/src/_contextApi/AppContext";
export default function AisebarHearder() {
  const { handelToggleAsidebar } = useContext(AppContext);
  return (
    <div className={styles.asidebar_header}>
      <div className={styles.logo_wrapper}>
        <Image
          src={logo}
          width={500}
          height={500}
          className={styles.img_style}
        />
      </div>
      <div className={styles.aside_hangBug} onClick={handelToggleAsidebar}>
        <IoReorderThree />
      </div>
    </div>
  );
}
