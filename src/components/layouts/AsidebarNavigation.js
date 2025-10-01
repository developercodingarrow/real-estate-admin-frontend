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
  RiTeamLine,
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
      roles: ["superAdmin", "admin", "editor"], // visible to all roles
    },
    {
      hrfLink: "/create-project",
      name: "New Project",
      icon: FaPlusSquare,
      roles: ["superAdmin", "admin"], // only superAdmin and admin
    },
    {
      hrfLink: "/blogs",
      name: "Blogs",
      icon: IoDocumentText,
      roles: ["superAdmin", "admin", "editor"], // all roles can see blogs
    },
    {
      hrfLink: "/enquires",
      name: "Enquires",
      icon: FaEnvelopeOpenText,
      roles: ["superAdmin"], // only superAdmin
    },
    {
      hrfLink: "/teams",
      name: "Teams",
      icon: RiTeamLine,
      roles: ["superAdmin"], // only superAdmin
    },
    {
      hrfLink: "/project-list",
      name: "Project List",
      icon: FaBuilding,
      roles: ["superAdmin", "admin"], // editor not allowed
    },
    {
      hrfLink: "/builders",
      name: "Builder",
      icon: SiBrandfolder,
      roles: ["superAdmin", "admin"],
    },
    {
      hrfLink: "/cities",
      name: "Cities",
      icon: FaLocationDot,
      roles: ["superAdmin", "admin"],
    },
    {
      hrfLink: "/location",
      name: "Location",
      icon: FaLocationDot,
      roles: ["superAdmin", "admin"],
    },
    {
      hrfLink: "/amenities",
      name: "Amenities",
      icon: MdOutlineHomeWork,
      roles: ["superAdmin", "admin"],
    },
    // databackup
    {
      hrfLink: "/databackup",
      name: "Data Backup",
      icon: MdOutlineHomeWork,
      roles: ["superAdmin"],
    },
  ];

  // Filter navigation based on role
  const filteredNavigation = navigationOption.filter((item) => {
    // if no roles are defined, show it by default
    if (!item.roles) return true;

    // check if the user role is inside the allowed roles array
    return item.roles.includes(useRole);
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
