"use client";
import React, { useContext } from "react";
import styles from "./listtable.module.css";
import { MdDelete, FiEdit, IoEye } from "../ApplicationIcons";
import Link from "next/link";
import { formatDate } from "@/src/_logicalFunctions/formatDate";
import ComponentLoading from "../loading/ComponentLoading";
import { ModelsContext } from "@/src/_contextApi/ModelContextProvider";
import { AuthContext } from "@/src/_contextApi/authContext";

export default function TeamTable(props) {
  const { tableData, handelDeleteItem } = props;
  const { authUser } = useContext(AuthContext);
  const useRole = authUser?.role;

  const { handelOpenDeleteModel } = useContext(ModelsContext);
  return (
    <div className={styles.table_wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>S No</th>
            <th>Name</th>
            <th>Email </th>
            <th>Role</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={item._id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.role}</td>
              <td>{formatDate(item.createdAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
