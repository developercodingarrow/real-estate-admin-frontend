"use client";
import React, { useContext } from "react";
import styles from "./mainlayout.module.css";
import { AppContext } from "@/src/_contextApi/AppContext";
import AsideBar from "./AsideBar";
import MainNavbar from "./MainNavbar";
export default function MainLayout({ children }) {
  const { isSidebarCollapsed } = useContext(AppContext);

  return (
    <div className={styles.main_container}>
      <div
        className={`${styles.navbar_wrapper} ${
          isSidebarCollapsed ? styles.navbar_wrapper_collapsed : ""
        } `}
      >
        <MainNavbar />
      </div>
      <div
        className={`${styles.asidbar_wrapper} ${
          isSidebarCollapsed ? styles.asidbar_wrapper_collapsed : ""
        }`}
      >
        <AsideBar />
      </div>
      <div
        className={`${styles.children_wrapper} ${
          isSidebarCollapsed ? styles.children_wrapper_collapsed : ""
        } `}
      >
        {children}
      </div>
    </div>
  );
}
