"use client";
import React from "react";
import styles from "./listtable.module.css";
import { MdDelete, FiEdit, IoEye } from "../ApplicationIcons";
import Link from "next/link";
import { formatDate, formatDevice } from "@/src/_logicalFunctions/formatDate";

export default function EnquireTable(props) {
  const { tableData } = props;

  return (
    <div className={styles.table_wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>S No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile Number</th>
            <th>ipAddress</th>
            <th>Device</th>
            <th>Page Url</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{item?.name}</td>
                <td>{item?.email}</td>
                <td>{item?.mobileNumber}</td>
                <td>{item?.ipAddress}</td>
                <td>{formatDevice(item?.userAgent)}</td>
                <td>
                  <Link href={item?.pageUrl || "#"}>view page</Link>
                </td>
                <td>{formatDate(item.createdAt)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
