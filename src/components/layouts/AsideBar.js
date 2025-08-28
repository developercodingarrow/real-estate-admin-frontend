"use client";
import React, { useContext } from "react";
import { AppContext } from "@/src/_contextApi/AppContext";
import styles from "./asidebar.module.css";
import AisebarHearder from "./AisebarHearder";
import AsidebarNavigation from "./AsidebarNavigation";
export default function AsideBar() {
  const { isSidebarCollapsed } = useContext(AppContext);
  return (
    <div
      className={`${styles.main_container} ${
        isSidebarCollapsed ? styles.main_container_collapsed : ""
      }`}
    >
      <div className={styles.top_section}>
        <AisebarHearder />
        <div>
          <AsidebarNavigation />
        </div>
      </div>
    </div>
  );
}
