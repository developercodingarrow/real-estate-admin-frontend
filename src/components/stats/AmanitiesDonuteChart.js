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

export default function AmanitiesDonuteChart(props) {
  const { apiData } = props;
  // ✅ Format apiData directly
  const data = useMemo(() => {
    if (!apiData) return [];
    return apiData.map((item) => ({
      name: item._id, // recharts "name"
      value: item.count, // recharts "value"
    }));
  }, [apiData]);

  const COLORS = ["#FF8042", "#00C49F", "#0069c4ff"]; // orange, teal
  return (
    <div className={styles.project_Publsih_statsContinaer}>
      <div className={styles.stats_header}>
        <div className={styles.header_title}>Amenities by Property Type</div>
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
              labelLine={60}
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
