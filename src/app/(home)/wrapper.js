import React from "react";
import styles from "./page.module.css";
import EnquireLineChart from "@/src/components/stats/EnquireLineChart";
import ProjectTinyBarChart from "@/src/components/stats/ProjectTinyBarChart";
import ProjectPublishStatusDonutChart from "@/src/components/stats/ProjectPublishStatusDonutChart";
import StatsBox from "@/src/components/stats/StatsBox";
import AmanitiesDonuteChart from "@/src/components/stats/AmanitiesDonuteChart";

export default function HomePagewrapper(props) {
  const {
    overallStats,
    projectStats,
    PublishStats,
    amnitiesStats,
    enquireStats,
  } = props;
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
        <StatsBox apiData={overallStats} />
      </div>
      <div className={styles.inner_container}>
        <div className={styles.left_column}>
          <div className={styles.project_wrapper}>
            <ProjectTinyBarChart apiData={projectStats} />
          </div>
        </div>
        <div className={styles.right_column}>
          <div className={styles.sideBox_wrapepr}>
            <ProjectPublishStatusDonutChart apiData={PublishStats} />
          </div>
          <div className={styles.sideBox_wrapepr}>
            <AmanitiesDonuteChart apiData={amnitiesStats} />
          </div>
        </div>
      </div>

      <div className={styles.full_width_container}>
        <div className={styles.project_wrapper}>
          <EnquireLineChart apiData={enquireStats} />
        </div>
      </div>
    </div>
  );
}
