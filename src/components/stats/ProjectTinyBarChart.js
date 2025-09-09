"use client";
import React, { useEffect, useState } from "react";
import styles from "./css/projectTineyBarChar.module.css";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { projectStatsAction } from "@/src/app/utils/statsActions";

export default function ProjectTinyBarChart() {
  const [data, setData] = useState([]);

  const handelGetSatsData = async () => {
    try {
      const res = await projectStatsAction();

      if (res.status === "success") {
        const { byType, byCategory, byPublishStatus } = res.data;

        const formattedByType = byType.map((item) => ({
          name: item._id,
          value: item.count,
        }));

        const formattedByCategory = byCategory.map((item) => ({
          name: item._id,
          value: item.count,
        }));

        const formattedByPublishStatus = byPublishStatus.map((item) => ({
          name: item._id,
          value: item.count,
        }));

        setData([
          { label: "Type", values: formattedByType },
          { label: "Category", values: formattedByCategory },
          { label: "Publish Status", values: formattedByPublishStatus },
        ]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handelGetSatsData();
  }, []);

  return (
    <div className={styles.main_container}>
      <div className={styles.stats_header}>
        <div className={styles.header_title}>Project publsih Status</div>
      </div>
      <div className={styles.barStats_wrapper}>
        <ResponsiveContainer>
          <BarChart data={data[0]?.values || []}>
            {" "}
            {/* Show "Type" by default */}
            <XAxis dataKey="name" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="value" fill="#735dff" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
