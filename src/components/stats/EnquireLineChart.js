"use client";
import React from "react";
import styles from "./css/enquireLinechart.module.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function EnquireLineChart(props) {
  const { apiData } = props;

  return (
    <div className={styles.main_container}>
      <div className={styles.stats_header}>
        <div className={styles.header_title}>Daily Enquire</div>
      </div>
      <div className={styles.barStats_wrapper}>
        <ResponsiveContainer>
          <LineChart data={apiData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="enquiries"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
