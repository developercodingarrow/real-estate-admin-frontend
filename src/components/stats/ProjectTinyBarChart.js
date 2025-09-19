"use client";
import React, { useEffect, useState, useMemo } from "react";
import styles from "./css/projectTineyBarChar.module.css";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export default function ProjectTinyBarChart(props) {
  const { apiData } = props;

  // Format data directly from apiData
  const data = useMemo(() => {
    if (!apiData) return [];

    const { byType, byCategory, byPublishStatus } = apiData;

    const formattedByType = byType?.map((item) => ({
      name: item._id,
      value: item.count,
    }));

    const formattedByCategory = byCategory?.map((item) => ({
      name: item._id,
      value: item.count,
    }));

    const formattedByPublishStatus = byPublishStatus?.map((item) => ({
      name: item._id,
      value: item.count,
    }));

    return [
      { label: "Type", values: formattedByType },
      { label: "Category", values: formattedByCategory },
      { label: "Publish Status", values: formattedByPublishStatus },
    ];
  }, [apiData]);

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
