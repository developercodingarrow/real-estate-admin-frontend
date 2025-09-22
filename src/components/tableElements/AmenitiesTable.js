"use client";
import React, { useContext } from "react";
import styles from "./listtable.module.css";
import { MdDelete, FiEdit, IoEye } from "../ApplicationIcons";
import Link from "next/link";
import { formatDate } from "@/src/_logicalFunctions/formatDate";
import ComponentLoading from "../loading/ComponentLoading";
import { ModelsContext } from "@/src/_contextApi/ModelContextProvider";
import { AuthContext } from "@/src/_contextApi/authContext";

export default function AmenitiesTable(props) {
  const { tableData, handelDeleteItem } = props;
  const { authUser } = useContext(AuthContext);
  const useRole = authUser?.role;

  const { handelOpenDeleteModel } = useContext(ModelsContext);

  const handelDeleteTableItem = (id) => {
    handelOpenDeleteModel(id);
  };
  return (
    <div className={styles.table_wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>S No</th>
            <th>property Type</th>
            <th>Amanities </th>
            <th>Date</th>
            {useRole === "superAdmin" && <th>Delete</th>}
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={item._id}>
              <td>{index + 1}</td>
              <td>{item.propertyType}</td>
              <td>{item.name}</td>
              <td>{formatDate(item.createdAt)}</td>
              {useRole === "superAdmin" && (
                <td>
                  <span className={styles.table_iconBox}>
                    <MdDelete
                      className={styles.table_icon}
                      onClick={() => handelDeleteTableItem(item._id)}
                    />
                  </span>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
