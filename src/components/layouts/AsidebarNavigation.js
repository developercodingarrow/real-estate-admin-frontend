"use client";
import React, { useContext } from "react";
import { AppContext } from "@/src/_contextApi/AppContext";
import styles from "./asidebarnavigation.module.css";
import Link from "next/link";
import {
  IoDocumentText,
  FaBuilding,
  MdLeaderboard,
  FaLocationDot,
  FaPlusSquare,
  MdOutlineHomeWork,
  FaEnvelopeOpenText,
  SiBrandfolder,
} from "../ApplicationIcons";
import { AuthContext } from "@/src/_contextApi/authContext";
export default function AsidebarNavigation() {
  const { isSidebarCollapsed } = useContext(AppContext);
  const { authUser } = useContext(AuthContext);
  const useRole = authUser?.role;
  const navigationOption = [
    {
      hrfLink: "/",
      name: "Home",
      icon: MdLeaderboard,
    },
    {
      hrfLink: "/create-project",
      name: "New Project",
      icon: FaPlusSquare,
    },
    {
      hrfLink: "/blogs",
      name: "blogs",
      icon: IoDocumentText, // Use the actual component, not a string
    },
    {
      hrfLink: "/enquires",
      name: "Enquires",
      icon: FaEnvelopeOpenText,
      role: "superAdmin", // Only superAdmin can see this
    },
    {
      hrfLink: "/project-list",
      name: "Project List",
      icon: FaBuilding, // Use the actual component, not a string
    },
    {
      hrfLink: "/builders",
      name: "Builder",
      icon: SiBrandfolder,
    },
    {
      hrfLink: "/cities",
      name: "Cities",
      icon: FaLocationDot,
    },

    {
      hrfLink: "/location",
      name: "Location",
      icon: FaLocationDot,
    },
    {
      hrfLink: "/amenities",
      name: "amenities",
      icon: MdOutlineHomeWork,
    },
  ];

  // Filter navigation based on role
  const filteredNavigation = navigationOption.filter((item) => {
    if (item.role) return item.role === useRole; // Only show if role matches
    return true; // Show all others
  });

  return (
    <div className={styles.navigatio_wrapper}>
      {filteredNavigation.map((item, index) => {
        const IconComponent = item.icon; // Store the icon component in a variable
        return (
          <Link
            href={`${item.hrfLink}`}
            className={`${styles.navigation_links} ${
              isSidebarCollapsed ? styles.collapsediconStyle : ""
            } `}
          >
            <div
              className={`${styles.navigation_icon} ${
                isSidebarCollapsed ? styles.collapsed_icon : ""
              }`}
            >
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
