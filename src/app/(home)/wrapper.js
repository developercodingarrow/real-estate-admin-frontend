"use client";
import React from "react";
import styles from "./page.module.css";
import EnquireLineChart from "@/src/components/stats/EnquireLineChart";
import ProjectTinyBarChart from "@/src/components/stats/ProjectTinyBarChart";
import ProjectPublishStatusDonutChart from "@/src/components/stats/ProjectPublishStatusDonutChart";
import StatsBox from "@/src/components/stats/StatsBox";
import AmanitiesDonuteChart from "@/src/components/stats/AmanitiesDonuteChart";

export default function HomePagewrapper() {
  return (
    <div className={styles.main_container}>
      <div className={styles.page_header}>
        <div className={styles.page_Title}>
          Welcome Back, website Stats/Report
        </div>
        <div className={styles.sub_heading}>
          Let's drive in and get thing done
        </div>
      </div>
      <div className={styles.statsBox_wrapper}>
        <StatsBox statsTitle="Total Projects" statsNumber={234} />
      </div>
      <div className={styles.inner_container}>
        <div className={styles.left_column}>
          <div className={styles.project_wrapper}>
            <ProjectTinyBarChart />
          </div>
        </div>
        <div className={styles.right_column}>
          <div className={styles.sideBox_wrapepr}>
            <ProjectPublishStatusDonutChart />
          </div>
          <div className={styles.sideBox_wrapepr}>
            <AmanitiesDonuteChart />
          </div>
        </div>
      </div>

      <div className={styles.full_width_container}>
        <div className={styles.project_wrapper}>
          <EnquireLineChart />
        </div>
      </div>
    </div>
  );
}
