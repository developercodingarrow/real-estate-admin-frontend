"use client";
import React, { useEffect, useState } from "react";
import styles from "./stats.module.css";
import {
  FaBuilding,
  IoDocumentText,
  SiBrandfolder,
  MdOutlineHomeWork,
  FaEnvelopeOpenText,
  FaLocationDot,
} from "../ApplicationIcons";
import Link from "next/link";

export default function StatsBox(props) {
  const { apiData } = props;

  const data = [
    { title: "total projects", value: apiData.totalProjects, slug: "projects" },
    { title: "total blogs", value: apiData.totalBlogs, slug: "blogs" },
    { title: "total enquires", value: apiData.totalEnquires, slug: "enquires" },
    { title: "total builders", value: apiData.totalBuilders, slug: "builders" },
    {
      title: "total amenities",
      value: apiData.totalAmenities,
      slug: "amenities",
    },
    { title: "total cities", value: apiData.totalCities, slug: "cities" },
  ];

  const renderIcon = (iconType) => {
    switch (iconType) {
      case "projects":
        return <FaBuilding />;
        break;

      case "blogs":
        return <IoDocumentText />;
        break;
      case "enquires":
        return <FaEnvelopeOpenText />;
        break;

      case "builders":
        return <SiBrandfolder />;
        break;

      case "amenities":
        return <MdOutlineHomeWork />;
        break;

      case "cities":
        return <FaLocationDot />;
        break;

      default:
        break;
    }
  };

  return (
    <div className={styles.statsBox_mainContainer}>
      {data.map((item, index) => {
        return (
          <div className={styles.statsBox_container}>
            <div className={styles.StatsBox_innerContainer}>
              <div className={styles.statsBox_leftColumn}>
                <div className={styles.statsBox_title}>{item.title}</div>
                <div className={styles.statsBox_statsNumber}>{item.value}</div>
              </div>
              <div className={styles.statsBox_rightColumn}>
                <div className={styles.statsIcon_Box}>
                  {renderIcon(item.slug)}
                </div>
              </div>
            </div>
            <Link href={`/${item.slug}`} className={styles.statsLink_style}>
              view Projects
            </Link>
          </div>
        );
      })}
    </div>
  );
}
