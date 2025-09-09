"use client";
import React, { useEffect, useState } from "react";
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
import { enquireStatsAction } from "@/src/app/utils/statsActions";

export default function EnquireLineChart() {
  const [data, setData] = useState([]);

  const handelGetEnquire = async () => {
    try {
      const res = await enquireStatsAction();
      if (res.status === "success") {
        setData(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handelGetEnquire();
  }, []);
  return (
    <div className={styles.main_container}>
      <div className={styles.stats_header}>
        <div className={styles.header_title}>Daily Enquire</div>
      </div>
      <div className={styles.barStats_wrapper}>
        <ResponsiveContainer>
          <LineChart data={data}>
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
