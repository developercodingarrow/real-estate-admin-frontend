"use client";
import React, { useEffect, useState, useMemo } from "react";
import styles from "./stats.module.css";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const COLORS = ["#FF8042", "#00C49F"]; // orange, teal

export default function ProjectPublishStatusDonutChart(props) {
  const { apiData } = props;
  const data = useMemo(() => {
    if (!apiData) return [];
    return apiData.map((item) => ({
      name:
        item._id === true
          ? "Publish"
          : item._id === false
          ? "Draft"
          : "Unknown",
      value: item.count,
    }));
  }, [apiData]);
  return (
    <div className={styles.project_Publsih_statsContinaer}>
      <div className={styles.stats_header}>
        <div className={styles.header_title}>Project publsih Status</div>
      </div>
      <div className={styles.circleChart_wrapper}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
