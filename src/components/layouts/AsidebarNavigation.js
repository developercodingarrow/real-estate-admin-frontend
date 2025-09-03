"use client";
import React, { useContext } from "react";
import { AppContext } from "@/src/_contextApi/AppContext";
import styles from "./asidebarnavigation.module.css";
import Link from "next/link";
import {
  IoDocumentText,
  FaBuilding,
  MdLeaderboard,
  MdContactPhone,
  FaHospitalUser,
  FaLocationDot,
  LiaHashtagSolid,
  FaPlusSquare,
} from "../ApplicationIcons";
export default function AsidebarNavigation() {
  const { isSidebarCollapsed } = useContext(AppContext);
  const navigationOption = [
    {
      hrfLink: "/create-project",
      name: "New Project",
      icon: FaPlusSquare,
    },
    {
      hrfLink: "/",
      name: "projects",
      icon: FaBuilding, // Use the actual component, not a string
    },
    {
      hrfLink: "/residential-project",
      name: "Create residential",
      icon: IoDocumentText, // Use the actual component, not a string
    },
    {
      hrfLink: "/commercial-project",
      name: "Create commercial",
      icon: IoDocumentText, // Use the actual component, not a string
    },
    {
      hrfLink: "/project-list",
      name: "Project List",
      icon: MdContactPhone, // Use the actual component, not a string
    },
    {
      hrfLink: "/",
      name: "Stats",
      icon: MdLeaderboard, // Use the actual component, not a string
    },
    {
      hrfLink: "/builders",
      name: "Builder",
      icon: FaHospitalUser,
    },
    {
      hrfLink: "/cities",
      name: "Cities",
      icon: FaLocationDot,
    },
    {
      hrfLink: "/",
      name: "Keywords",
      icon: LiaHashtagSolid,
    },
  ];

  return (
    <div className={styles.navigatio_wrapper}>
      {navigationOption.map((item, index) => {
        const IconComponent = item.icon; // Store the icon component in a variable
        return (
          <Link href={`${item.hrfLink}`} className={styles.navigation_links}>
            <div className={styles.navigation_icon}>
              <IconComponent />
            </div>
            <div
              className={`${styles.navigation_text} ${
                isSidebarCollapsed ? styles.navigation_text_collapsed : ""
              } `}
            >
              {item.name}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
